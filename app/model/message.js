'use strict';

module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;

  const Message = app.model.define('message', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    chatId: {
      type: STRING,
      allowNull: false,
    },
    role: {
      type: STRING(16),
      allowNull: false,
    },
    content: {
      type: TEXT,
      allowNull: false,
    },
  }, {
    indexes: [{
      name: 'key_on_message',
      fields: [ 'chatId' ],
    }],
    engine: 'InnoDB',
    charset: 'utf8',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    underscored: false,
  });

  return Message;
};
