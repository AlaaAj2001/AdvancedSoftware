exports.up = function (knex) {
    return knex.schema.createTable('open_data_access', function (table) {
      table.increments('id').primary();
      table.integer('researcherId').unsigned().references('id').inTable('users');
      table.integer('dataId').unsigned().references('id').inTable('environmental_data');
      // Add other open data access fields as needed
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('open_data_access');
  };
  