// migrations/timestamp_create_educational_resources.js

exports.up = function (knex) {
    return knex.schema.createTable('educational_resources', function (table) {
      table.uuid('id').primary();
      table.string('title').notNullable();
      table.string('url').notNullable();
      // Add more fields as needed
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('educational_resources');
  };
  