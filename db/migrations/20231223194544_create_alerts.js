exports.up = function (knex) {
    return knex.schema.createTable('alerts', function (table) {
      table.uuid('alertId').primary();
      table.string('alertType').notNullable();
      table.text('description').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('alerts');
  };