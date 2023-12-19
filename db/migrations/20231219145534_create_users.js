// migrations/timestamp_create_users.js

exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
      table.uuid('id').primary();
      table.string('username').notNullable().unique();
      table.string('email').notNullable().unique();
      // Add more fields as needed
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users');
  };
  