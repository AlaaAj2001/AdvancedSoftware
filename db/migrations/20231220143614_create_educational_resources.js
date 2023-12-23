// migrations/20231219145606_create_educational_resources.js

exports.up = function (knex) {
    return knex.schema.createTable('educational_resources', function (table) {
      table.uuid('id').primary();
      table.string('title').notNullable();
      table.string('author').notNullable();
      table.text('content').notNullable();
      table.string('url').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('educational_resources');
  };
  