exports.up = function (knex) {
    return knex.schema.createTable('reports', function (table) {
      table.increments('reportId').primary();
      table.integer('userId').unsigned().notNullable().references('id').inTable('users');
      table.text('description').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('reports');
  };