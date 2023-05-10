'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.sequelize.query(
      'SELECT id FROM Users;',
    ).then((users) => {
      const userRows = users[0];
      return queryInterface.bulkInsert('Posts', [
        {
          text: 'Ida great shite last night so I did',
          userId: userRows[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Jeffrey Donalson is a fantastic leader',
          userId: userRows[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Jamie Bryson is a legal mastermind. Shits on Ally MacBeal',
          userId: userRows[2].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Putin is a civil rights hero',
          userId: userRows[3].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Watching Happy Valley LOL',
          userId: userRows[4].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Love iland is lit xo',
          userId: userRows[5].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Bible thumpers down the rock now hai',
          userId: userRows[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        }],
        {}
      );
    })



  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
