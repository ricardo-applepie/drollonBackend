const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sequelize, Board, Group, Item, User } = require('./tables');
const app = express()
const cors = require('cors'); // Import the cors middleware


const port = 4000;

const corsOptions = {
  origin: '*', // Allow only this origin
  methods: ['GET', 'POST'],        // Allow specific HTTP methods
  credentials: true                // Allow cookies and credentials if necessary
};

app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());


function verifyToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Access denied' });
  try {
    const decoded = jwt.verify(token, 'hashed-code-12');
    req.userId = decoded.userId;
    next();
   } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
   }
 };

app.post('/api/v1/boards',verifyToken, async (req, res) => {
  const { boardName } = req.body;
  try {

    await Board.create({
      name: boardName
    });
    const boards = await Board.findAll();  // Await the promise here

    res.status(201).json(boards);
  } catch (error) {
    // If any error occurs, rollback the transaction
    res.status(500).json({ message: 'Transaction failed', error: error.message });
  }
});

app.get('/api/v1/boards', verifyToken, async (req, res) => {

  try {
    const boards = await Board.findAll();  // Await the promise here
    res.status(201).json(boards);
  } catch (error) {
    // If any error occurs, rollback the transaction
    res.status(500).json({ message: 'Transaction failed', error: error.message });
  }
});

app.get('/api/v1/items', verifyToken , async (req, res) => {
  const { boardId } = req.query;

  try {
    // Fetch the board name by its ID
    const board = await Board.findOne({
      where: { boardId }, // Ensure the correct boardId is provided
      attributes: ['name'], // Select only the name
    });

    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }

    // Fetch groups with their items for the given boardId
    const groups = await Group.findAll({
      attributes: ['groupId', 'name', 'description'],
      where: { boardId },  // Filter groups by boardId
      include: [
        {
          model: Item,
          as: 'items',  // Alias to match the association
          attributes: ['itemId', 'name', 'pos'],  // Select necessary fields for Item
        },
      ],
    });

    // Structure the response to include the board name and groups
    const response = {
      boardName: board.name,  // Include the board's name
      groups,  // Include the groups and their items
    };

    // Send the result as a JSON response
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching items' });
  }
});

app.post('/api/v1/item', verifyToken, async (req, res) => {
  const { groupId, boardId, itemName } = req.body;

  try {
    await Item.create({
      name: itemName, 
      boardId: boardId,
      groupId: groupId
    });

    const groups = await Group.findAll({
      attributes: ['groupId', 'name', 'description'],
      where: { boardId },  // Filter groups by boardId
      include: [
        {
          model: Item,
          as: 'items',  // Alias to match the association
          attributes: ['itemId', 'name', 'pos'],  // Select necessary fields for Item
        },
      ],
    });
    res.status(201).json({groups});
  } catch (error) {
    // If any error occurs, rollback the transaction
    res.status(500).json({ message: 'Transaction failed', error: error.message });
  }
});

app.get('/api/v1/item', verifyToken ,  async (req, res) => {
  const { groupId, boardId } = req.query;
   
  try {
    const item = await Item.findOne({
      where: { boardId, groupId }, // Ensure the correct boardId is provided
    });

    const groups = await Group.findAll({
      attributes: ['groupId', 'name', 'description'],
      where: { boardId },  // Filter groups by boardId
      include: [
        {
          model: Item,
          as: 'items',  // Alias to match the association
          attributes: ['itemId', 'name', 'pos'],  // Select necessary fields for Item
        },
      ],
    });
    res.status(201).json({groups});
  } catch (error) {
    // If any error occurs, rollback the transaction
    res.status(500).json({ message: 'Transaction failed', error: error.message });
  }
});


app.post('/api/v1/groups', verifyToken, async (req, res) => {
  const { groupName, boardId } = req.body;

  try {
    await Group.create({
      name: groupName, 
      boardId: Number(boardId)
    });

    const groups = await Group.findAll({
      attributes: ['groupId', 'name', 'description'],
      where: { boardId },  // Filter groups by boardId
      include: [
        {
          model: Item,
          as: 'items',  // Alias to match the association
          attributes: ['itemId', 'name', 'pos'],  // Select necessary fields for Item
        },
      ],
    });

    res.status(201).json({groups: groups});
  } catch (error) {
    // If any error occurs, rollback the transaction
    res.status(500).json({ message: 'Transaction failed', error: error.message });
  }
});



// Call the function to insert a user
app.post('/api/v1/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Fetch user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.dataValues.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed: Incorrect password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.dataValues.userId }, 'hashed-code-12');

    // Set cookie with JWT
    res.cookie('authToken', token, {
      maxAge: 900000, // 15 minutes
      httpOnly: true, // Prevent access by client-side JavaScript
      secure: process.env.NODE_ENV === 'production', // Set true in production for HTTPS
      sameSite: 'strict', // Strictly same-site requests
    });

    // Respond with success
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
});


 
app.post('/api/v1/signup', (req, res) => {
  const {firstName, lastName, password, email, username } = req.body;
  const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async function(err, hash) {
        try {
            const user = await User.create({firstName, lastName, username, password: hash, email });
             console.log(user ,"öamsndpans")
             const createdUserID =  user.toJSON().userId;
            // await Account.create({
            //     balance: 0, // Random balance for example
            //     email: email, // Use the same email for the account
            //     userId: createdUserID // Associate the account with the created user
            // });
            res.json({user: user.id})
        } catch (error) {
          const errorMessages = error.errors.map(err => err.message);

          res.json({error: errorMessages})
        }    
   });


})


// app.get('/account', verifyToken, async (req, res) => {
//   try {
//     const { userId } = req;
//     console.log('Fetching account for userId:', userId);

//     const account = await Account.findOne({
//       where: { userId: userId },
//       include: [{
//         model: User,
//         attributes: ['firstName', 'lastName', 'email'], // Specify the fields you want to include
//       }, 
//     ],

//     });

//     if (!account) {
//       return res.status(404).json({ error: 'Account not found' });
//     }

//     // Fetch notifications for the specific user
//     const notifications = await Notification.findAll({
//       where: { userId: userId , status : 'unread'},
//       attributes: ['notificationId', 'message', 'status', 'createdAt'], // Specify the fields you want
//       order: [['createdAt', 'DESC']], // Order by creation date, latest first
//     });

//     const transactions = await Transaction.findAll({
//     where: {
//         [Sequelize.Op.or]: [
//         { senderId: userId },
//         { receiverId: userId }
//         ]
//     },
//     order: [['createdAt', 'DESC']], // Order by creation date, latest first
//     });

//     const users = await User.findAll({
//         where: {
//             userId: {
//             [Sequelize.Op.ne]: userId  // Exclude the current user
//             }
//         }
//     });
//     const plainNotifications = notifications.map(notification => notification.get({ plain: true }));


//     // Restructure the response
//     const accountData = account.toJSON();
//     const user = accountData.User;

//     // Flatten the user fields into accountData
//     const response = {
//       userId: userId,   
//       accountId: accountData.accountId,
//       balance: accountData.balance,
//       email: accountData.email,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       createdAt: accountData.createdAt,
//       updatedAt: accountData.updatedAt,
//       notifications: plainNotifications, 
//       users: users, 
//       transactions: transactions
//     };

//     res.status(200).json(response);
//    } catch (error) {
//     console.error('Error fetching account and user details:', error);
//     res.status(500).json({ error: 'Failed to fetch account' });
//   }
// });


// app.post('/user',  (req, res) => {
//   const {firstName, lastName, password, email, username } = req.body;
//   let saltRounds = 10;
//     bcrypt.hash(password, saltRounds, async function(err, hash) {
//         try {
//             const user = await User.create({firstName, lastName, username, password: hash, email, username });
//              const createdUserID =  user.toJSON().userId;
//             await Account.create({
//                 balance: 0, // Random balance for example
//                 email: email, // Use the same email for the account
//                 userId: createdUserID // Associate the account with the created user
//             });
//             res.json({user: user.id})
//         } catch (error) {
            
//             console.error("Error inserting user:", error);
//         }    
//    });


// })


// app.get('/users', verifyToken, async (req, res) => {
//     // Find all users
//     const users = await User.findAll();
//     console.log('All users:', JSON.stringify(users, null, 2));
//     res.status(200).json({users});
// });


sequelize.sync().then(req => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
});
