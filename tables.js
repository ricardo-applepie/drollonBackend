// models/tables.js
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('./sequelize'); // Ensure the path is correct

  const Account = sequelize.define('Account', {
    accountId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    validAuthDomains: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      field: 'valid_auth_domains',
    },
    isEmailAuth: {
      type: DataTypes.BOOLEAN,
      field: 'is_email_auth',
    },
    isGappsAuth: {
      type: DataTypes.BOOLEAN,
      field: 'is_gapps_auth',
    },
    tier: {
      type: DataTypes.STRING,
    },
    startedPlanAt: {
      type: DataTypes.DATE,
      field: 'started_plan_at',
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,  // Automatically set the current date and time
    },
    maxUsers: {
      type: DataTypes.INTEGER,
      field: 'max_users',
    },
    isPremium: {
      type: DataTypes.BOOLEAN,
      field: 'is_premium',
    },
    logoUrl: {
      type: DataTypes.STRING,
      field: 'logo_url',
    },
    paymentCurrency: {
      type: DataTypes.STRING,
      field: 'payment_currency',
    },
    showTimelineWeekends: {
      type: DataTypes.BOOLEAN,
      field: 'show_timeline_weekends',
    },
    isGiphyEnabled: {
      type: DataTypes.BOOLEAN,
      field: 'is_giphy_enabled',
    },
    isLinksPreviewsEnabled: {
      type: DataTypes.BOOLEAN,
      field: 'is_links_previews_enabled',
    },
    isFilesPreviewsEnabled: {
      type: DataTypes.BOOLEAN,
      field: 'is_files_previews_enabled',
    },
    passwordPolicy: {
      type: DataTypes.STRING,
      field: 'password_policy',
    },
    lastUserSerialNumber: {
      type: DataTypes.INTEGER,
      field: 'last_user_serial_number',
    },
    subscriptionState: {
      type: DataTypes.STRING,
      field: 'subscription_state',
    },
    pricingVersion: {
      type: DataTypes.INTEGER,
      field: 'pricing_version',
    },
    trialPeriod: {
      type: DataTypes.INTEGER,
      field: 'trial_period',
    },
    state: {
      type: DataTypes.STRING,
    },
    accountManager: {
      type: DataTypes.STRING,
      field: 'account_manager',
    },
    grantedAutomations: {
      type: DataTypes.INTEGER,
      field: 'granted_automations',
    },
    grantedIntegrations: {
      type: DataTypes.INTEGER,
      field: 'granted_integrations',
    },
    workspacesLimit: {
      type: DataTypes.INTEGER,
      field: 'workspaces_limit',
    },
    isMondaySignup: {
      type: DataTypes.BOOLEAN,
      field: 'is_monday_signup',
    },
    accountSettings: {
      type: DataTypes.JSONB,
      field: 'account_settings',
    },
    billingSupportedCurrencies: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      field: 'billing_supported_currencies',
    },
  }, {
    tableName: 'accounts',
    timestamps: false, // Adjust this if your table uses `createdAt` and `updatedAt`.
    underscored: true, // Maps camelCase attributes to snake_case fields.
  });

  const User = sequelize.define('User', {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
          type: DataTypes.STRING
      },
      firstName: {
          type: DataTypes.STRING
      },
      lastName: {
          type: DataTypes.STRING
      },
      title: {
          type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,  // Automatically set the current date and time
      },
      becameActiveAt: {
          type: DataTypes.DATE
      },
      photoUrl: {
          type: DataTypes.STRING
      },
      username: {
       type: DataTypes.STRING,
        unique: true
      },
      email: {
          type: DataTypes.STRING, 
          allowNull: false, 
          unique: true
      },
      url: {
          type: DataTypes.STRING
      },
      countryCode: {
          type: DataTypes.STRING
      },
      latLng: {
          type: DataTypes.STRING
      },
      otpPhone: {
          type: DataTypes.STRING,
          allowNull: true
      },
      otpUserHoldsSecret: {
        type: DataTypes.BOOLEAN
      },
      password: {
        type: DataTypes.STRING, 
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        unique: true
      },
      mobilePhone: {
          type: DataTypes.STRING
      },
      has2faEnabled: {
          type: DataTypes.BOOLEAN,
          allowNull: true
      },
      isAdmin: {
          type: DataTypes.BOOLEAN
      },
      tipsSeen: {
          type: DataTypes.JSON
      },
      isViewOnly: {
          type: DataTypes.BOOLEAN
      },
      isGuest: {
          type: DataTypes.BOOLEAN
      },
      disableUserActivityIndication: {
          type: DataTypes.BOOLEAN
      },
      applicationTheme: {
          type: DataTypes.STRING
      },
      mobileTheme: {
          type: DataTypes.STRING,
          allowNull: true
      },
      serialNumber: {
          type: DataTypes.INTEGER
      },
      recentSearches: {
          type: DataTypes.JSON
      },
      shouldShowUserGuidance: {
          type: DataTypes.BOOLEAN
      },
      initialNotificationsCount: {
          type: DataTypes.INTEGER
      },
      userGuidanceActions: {
          type: DataTypes.JSON,
          allowNull: true
      },
      savedSearches: {
          type: DataTypes.JSON
      },
      finishedWelcomeWizard: {
          type: DataTypes.BOOLEAN
      },
      welcomeWizardStep: {
          type: DataTypes.INTEGER
      },
      hasEverLoggedInFromMobile: {
          type: DataTypes.BOOLEAN
      },
      utmClusterId: {
          type: DataTypes.STRING,
          allowNull: true
      },
      utmSubClusterId: {
          type: DataTypes.STRING,
          allowNull: true
      },
      utmLocaleId: {
          type: DataTypes.STRING
      },
      localizedExperience: {
          type: DataTypes.BOOLEAN
      },
      recentBoardIds: {
          type: DataTypes.JSON
      },
      xiTerms: {
          type: DataTypes.JSON,
          allowNull: true
      },
      timeFormat: {
          type: DataTypes.STRING
      },
      outOfOffice: {
          type: DataTypes.JSON
      },
      dateLocale: {
          type: DataTypes.STRING
      },
      timeZoneOffset: {
          type: DataTypes.INTEGER
      },
      timeZoneString: {
          type: DataTypes.STRING
      },
      firstDayOfTheWeek: {
          type: DataTypes.STRING
      },
      referralLink: {
          type: DataTypes.STRING
      },
      mobileAppLastOpenedAt: {
          type: DataTypes.DATE
      },
      isOauth2Signup: {
          type: DataTypes.BOOLEAN,
          allowNull: true
      },
      confirmedEmail: {
          type: DataTypes.BOOLEAN
      },
      lastInteractionIds: {
          type: DataTypes.JSON
      },
      bbVisitorId: {
          type: DataTypes.STRING,
          allowNull: true
      },
      shouldSeeV8Transition: {
          type: DataTypes.BOOLEAN
      },
      myMondayOverviewId: {
          type: DataTypes.JSON
      },
      signUpSolutionId: {
          type: DataTypes.STRING,
          allowNull: true
      },
      signupClusters: {
          type: DataTypes.JSON
      },
      requiredSso: {
          type: DataTypes.BOOLEAN
      },
      wizardPulseNickname: {
          type: DataTypes.STRING,
          allowNull: true
      },
      hasPremiumSupport: {
          type: DataTypes.BOOLEAN,
          allowNull: true
      },
      role: {
          type: DataTypes.JSON
      },
      profilePhotoBgColor: {
          type: DataTypes.STRING,
          allowNull: true
      },
      canInviteUsers: {
          type: DataTypes.BOOLEAN
      },
      firstBoardVisit: {
          type: DataTypes.DATE,
          allowNull: true
      },
      isTrialMember: {
          type: DataTypes.BOOLEAN,
          allowNull: true
      },
      isChampion: {
          type: DataTypes.BOOLEAN,
          allowNull: true
      },
      canSeeInviteUsersModal: {
          type: DataTypes.BOOLEAN
      },
      userCreationBoardId: {
          type: DataTypes.STRING,
          allowNull: true
      },
      joinerSignupSolutionId: {
          type: DataTypes.STRING,
          allowNull: true
      },
      assignedBoardIdOnInvite: {
          type: DataTypes.STRING,
          allowNull: true
      },
      assignedItemIdOnInvite: {
          type: DataTypes.STRING,
          allowNull: true
      },
      landingBoardId: {
          type: DataTypes.STRING,
          allowNull: true
      },
      invitedById: {
          type: DataTypes.INTEGER
      }
  }, {
      tableName: 'users',
      timestamps: false
  });

  const Board = sequelize.define('Board', {
    boardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
      defaultValue: Sequelize.NOW,  // Automatically set the current date and time
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

  const Group = sequelize.define('Group', {
    groupId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,  // Automatically set the current date and time
    },
    createdBy: { // Changed to camelCase
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'created_by', // Maps to the snake_case column name
    },
  }, {
    timestamps: false, // Disable automatic timestamps
    tableName: 'groups', // Optionally specify the table name
  });

  const Item = sequelize.define('Item', {
    itemId: {  // camelCase in the model
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    isArchived: {  // camelCase in the model
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    isDeleted: {  // camelCase in the model
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    lastUpdatedData: {  // camelCase in the model
        type: DataTypes.JSONB, // Storing nested data as JSON
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    boardId: {  // camelCase in the model
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {  // camelCase in the model
        type: DataTypes.STRING,
        allowNull: false,
    },
    groupId: {
      type: DataTypes.INTEGER,  // Ensure the type is INTEGER
      allowNull: false,
    },
    pos: {  // camelCase in the model
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    columnValues: {  // camelCase in the model
        type: DataTypes.JSONB, // Storing nested data as JSON
        allowNull: true,
    },
    createdBy: {  // camelCase in the model
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    createdAt: {  // camelCase in the model
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,  // Automatically set the current date and time
    },
    isPermitted: {  // camelCase in the model
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    parentItemLink: {  // camelCase in the model
        type: DataTypes.STRING,
        allowNull: true,
    },
    }, {
    tableName: 'items',  // Table will be in snake_case ('items')
    underscored: true,  // Automatically converts camelCase to snake_case in the database
    timestamps: false,  // Disable timestamps if not needed
    });

  const Notification = sequelize.define('Notification', {
    notificationId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
    },
    opened: {
      type: DataTypes.BOOLEAN,
    },
    parentName: {
      type: DataTypes.STRING,
    },
    targetId: {
      type: DataTypes.INTEGER,
    },
    targetTypeCode: {
      type: DataTypes.INTEGER,
    },
    textPrefix: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    actionText: {
      type: DataTypes.STRING,
    },
    actionSuffix: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,  // Automatically set the current date and time
    },
    boardKind: {
      type: DataTypes.STRING,
    },
    icon: {
      type: DataTypes.STRING,
    },
    dateGroup: {
      type: DataTypes.STRING,
    },
    payload: {
      type: DataTypes.JSON,
    },
    kind: {
      type: DataTypes.INTEGER,
    },
    relatedTargetIds: {
      type: DataTypes.JSON,
    },
    targetClassName: {
     type: DataTypes.STRING,
    },
    likeStatus: {
      type: DataTypes.BOOLEAN,
    },
    isGroup: {
     type: DataTypes.BOOLEAN,
    },
    appId: {
      type: DataTypes.INTEGER,
    },
    bigbrainId: {
      type: DataTypes.INTEGER,
    },
    boardId: {
     type: DataTypes.INTEGER,
    },
    rootBoardId: {
     type: DataTypes.INTEGER,
    },
    subItemParentBoardId: {
      type: DataTypes.INTEGER,
    },
    itemId: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    totalCreatorsCount: {
      type: DataTypes.INTEGER,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    isHtmlContent: {
      type: DataTypes.BOOLEAN,
    },
    allowShowMoreButton: {
     type: DataTypes.BOOLEAN,
    },
    productKind: {
      type: DataTypes.STRING,
    },
    }, 
    { 
      timestamps: false 
    });

  const Subscriber = sequelize.define('Subscriber', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photoUrl: {
      type: DataTypes.STRING,
      field: 'photo_url',
      allowNull: true,
    },
    photoTiny: {
      type: DataTypes.STRING,
      field: 'photo_tiny',
      allowNull: true,
    },
    photoThumbSmall: {
      type: DataTypes.STRING,
      field: 'photo_thumb_small',
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    isPending: {
      type: DataTypes.BOOLEAN,
      field: 'is_pending',
      defaultValue: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      field: 'is_admin',
      defaultValue: false,
    },
    isOwner: {
      type: DataTypes.BOOLEAN,
      field: 'is_owner',
      defaultValue: false,
    },
    isViewOnly: {
      type: DataTypes.BOOLEAN,
      field: 'is_view_only',
      defaultValue: false,
    },
    isGuest: {
      type: DataTypes.BOOLEAN,
      field: 'is_guest',
      defaultValue: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'User',
    },
    outOfOffice: {
      type: DataTypes.JSON,
      field: 'out_of_office',
      allowNull: true,
    },
    timeZoneOffset: {
      type: DataTypes.INTEGER,
      field: 'time_zone_offset',
      allowNull: true,
    },
  }, {
    tableName: 'subscribers', // Map to 'subscribers' table in the database
    timestamps: false,
    underscored: true, // Use snake_case column names in the database
  });


  // Associations
  Group.hasMany(Item, {
    foreignKey: 'groupId',
    as: 'items',
  });

  Item.belongsTo(Group, {
    foreignKey: 'groupId',
    as: 'group',
  });

  Board.hasMany(Group, {
    foreignKey: 'boardId',
  })



  Account.hasMany(Board, {
    foreignKey: 'accountId',
  })

  Board.belongsTo(Account, {
    foreignKey: 'accountId',
  })

  User.belongsTo(Account, {
    foreignKey: 'accountId',
  })

  Account.hasMany(User, {
    foreignKey: 'accountId',
  })

  




// Sync the models with the database
const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true });  // { alter: true } ensures the table is modified if needed
    console.log('Models have been created and synced (if they did not exist).');
  } catch (error) {
    console.error('Error syncing models:', error);
  } finally {
    // Optionally close the connection after sync
    // await sequelize.close();
  }
};


module.exports = { syncModels, Board, Group, Item, User };
