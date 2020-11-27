'use strict';
//Banco de dados:"postgres" - Tabela:"Listas"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Listas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Nome_do_arquivo: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      lista: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Listas');
  }
};
