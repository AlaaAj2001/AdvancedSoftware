// migrations/20231226120000_create_sustainability_scores.js

exports.up = function (knex) {
    return knex.schema.createTable('sustainability_scores', function (table) {
      table.increments('id').primary();
      table.uuid('userId').notNullable().references('id').inTable('users');
      table.float('finalScore').notNullable();
      table.string('mostEnteredDataType'); // Assuming it's a string, you can adjust based on your data type
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('sustainability_scores');
  };
  