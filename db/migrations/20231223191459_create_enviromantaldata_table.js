exports.up = function(knex) {
    return knex.schema.createTable('environmentaldata', function(table) {
      table.increments('id').primary();
      table.string('username').notNullable();
      table.string('source');
      table.string('data_type');
      table.float('value');
      table.string('location');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('environmentaldata');
  };
  