const { DataTypes } = require('sequelize');

  const Account = sequelize.define('Account', {
    id: {
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
      field: 'created_at',
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

  // // Define the relationship between Account and Board (1-to-many)
  // Account.hasMany(sequelize.models.Board, { // Corrected model name to Board
  //   foreignKey: 'accountId', // Foreign key that references Account's `id`
  //   as: 'boards', // Alias to represent related Boards for an Account
  // });

  return Account;