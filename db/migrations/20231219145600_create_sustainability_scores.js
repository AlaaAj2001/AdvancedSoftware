// migrations/timestamp_create_sustainability_scores.js

exports.up = function (knex) {
    return knex.schema.createTable('sustainability_scores', function (table) {
      table.uuid('id').primary();
      table.uuid('user_id').notNullable().unique().references('id').inTable('users');
      table.integer('score').notNullable().defaultTo(0);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('sustainability_scores');
  };
  