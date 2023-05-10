'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        avatar: '/uploads/avatar1.png',
        username: 'Jamie Bryson',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        avatar: '/uploads/avatar2.png',
        username: 'Scutter Magnet',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        avatar: '/uploads/avatar3.png',
        username: 'xXx_TwInKle_ToEs_xXx',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        avatar: '/uploads/avatar4.png',
        username: 'FlatEarth93',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        avatar: '/uploads/avatar1.png',
        username: 'HairyBallZ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        avatar: '/uploads/avatar2.png',
        username: 'Sheperanian',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null);
  }
};
