"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        { title: "Electronics", createdAt: new Date(), updatedAt: new Date() },
        { title: "Jewelery", createdAt: new Date(), updatedAt: new Date() },
        {
          title: "Men's Clothing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Women's Clothing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     *
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     *
     */
  },
};
