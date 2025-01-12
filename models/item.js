'use strict';
import  { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Item = sequelize.define('Item', {
    id: {  // camelCase in the model
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    isArchived: {  // camelCase in the model
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    isDeleted: {  // camelCase in the model
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    lastUpdatedData: {  // camelCase in the model
        type: DataTypes.JSONB, // Storing nested data as JSON
        allowNull: false,
    },
    boardId: {  // camelCase in the model
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {  // camelCase in the model
        type: DataTypes.STRING,
        allowNull: false,
    },
    groupId: {  // camelCase in the model
        type: DataTypes.STRING,
        allowNull: false,
    },
    pos: {  // camelCase in the model
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    columnValues: {  // camelCase in the model
        type: DataTypes.JSONB, // Storing nested data as JSON
        allowNull: false,
    },
    createdBy: {  // camelCase in the model
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt: {  // camelCase in the model
        type: DataTypes.DATE,
        allowNull: false,
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

    Item.belongsTo(sequelize.models.Group, {
      foreignKey: 'groupId',
      as: 'group', // Optional alias for accessing items related to a group
    });
  

    return Item;
};
