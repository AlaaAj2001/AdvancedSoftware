exports.up = function (knex) {
    return knex.schema.createTable('reports', function (table) {
      table.uuid('reportId').primary();
      table.uuid('userId').notNullable().references('id').inTable('users');
      table.text('description').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('reports');
  };
  
