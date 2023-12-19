exports.up = function (knex) {
    return knex.schema.createTable('educational_resources', function (table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('url').notNullable();
      // Add other educational resource fields as needed
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('educational_resources');
  };
  