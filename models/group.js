const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Group = sequelize.define('Group', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: { // Changed to camelCase
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at', // Maps to the snake_case column name
    },
    createdBy: { // Changed to camelCase
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'created_by', // Maps to the snake_case column name
    },
  }, {
    timestamps: false, // Disable automatic timestamps
    tableName: 'groups', // Optionally specify the table name
  });

  // Define the relationship between Group and Item (1-to-many)
  Group.hasMany(sequelize.models.Item, {
    foreignKey: 'groupId', // Ensure this matches the column in the Item model
    as: 'items', // Alias for accessing related items
  });

  return Group;
};
