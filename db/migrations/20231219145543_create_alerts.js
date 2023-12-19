// migrations/timestamp_create_alerts.js

exports.up = function (knex) {
    return knex.schema.createTable('alerts', function (table) {
      table.uuid('id').primary();
      table.uuid('user_id').notNullable().references('id').inTable('users');
      table.string('message').notNullable();
      table.float('threshold').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('alerts');
  };
  