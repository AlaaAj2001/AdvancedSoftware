// migrations/timestamp_create_open_data_access.js

exports.up = function (knex) {
    return knex.schema.createTable('open_data_access', function (table) {
      table.uuid('id').primary();
      table.uuid('researcher_id').notNullable();
      table.json('data').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('open_data_access');
  };
  