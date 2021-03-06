'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('notices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      noticeTitle: {
        allowNull: false,
        type: STRING,
        comment: '公告标题',
      },
      noticeType: {
        allowNull: false,
        type: STRING,
        defaultValue: '1',
        comment: '公告类型（1消息 2公告）',
      },
      noticeContent: {
        allowNull: false,
        type: STRING,
        comment: '内容',
      },
      status: {
        type: STRING,
        defaultValue: '1',
        comment: '公告状态（1正常 0停用）',
      },
      createdAt: {
        allowNull: true,
        type: DATE,
        comment: '创建时间',
      },
      createdBy: {
        allowNull: true,
        type: STRING,
        comment: '创建者',
      },
      updatedAt: {
        allowNull: true,
        type: DATE,
        comment: '更新时间',
      },
      updatedBy: {
        allowNull: true,
        type: STRING,
        comment: '更新者',
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('notices');
  },
};
