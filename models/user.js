'use strict';
import  { DataTypes } from 'sequelize';

export default (sequelize) => {
  const User = sequelize.define('User', {
      id: {
          type: DataTypes.STRING,
          primaryKey: true
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
          type: DataTypes.DATE
      },
      becameActiveAt: {
          type: DataTypes.DATE
      },
      photoUrl: {
          type: DataTypes.STRING
      },
      email: {
          type: DataTypes.STRING
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
      phone: {
          type: DataTypes.STRING
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

  return User;
};
