import  { DataTypes } from 'sequelize';

export default (sequelize) => {
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

  return Subscriber;
};
