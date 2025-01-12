import  { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Notification = sequelize.define('Notification', {
    id: {
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

  return Notification;
};
