const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Board = sequelize.define('Board', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    boardKind: {
      type: DataTypes.STRING,
    },
    isPrivateShare: {
      type: DataTypes.BOOLEAN,
    },
    pos: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    archived: {
      type: DataTypes.BOOLEAN,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
    },
    workspaceId: {
      type: DataTypes.INTEGER,
    },
    loadingScope: {
      type: DataTypes.STRING,
    },
    parentBoardIds: {
      type: DataTypes.JSON,
    },
    shouldBeHidden: {
      type: DataTypes.BOOLEAN,
    },
    isCurrentUserOwner: {
      type: DataTypes.BOOLEAN,
    },
    subscribed: {
      type: DataTypes.BOOLEAN,
    },
    userRecency: {
      type: DataTypes.INTEGER,
    },
    systemEntity: {
      type: DataTypes.JSON,
    },
    isDraft: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: 'boards',
    timestamps: false,
  });

  // Define the association with the Group model.
  // Here, we are assuming that the foreign key column in the Group model is 'boardId'.
  Board.hasMany(sequelize.models.Group, {
    foreignKey: 'boardId', // Make sure this matches the Group model's foreign key column
    as: 'groups', // Alias to access related groups
  });

  return Board;
};
