exports.up = function (knex) {
  return knex.schema.createTable('environmental_data', function (table) {
    table.increments('id').primary();
    table.integer('userId').unsigned().references('id').inTable('users');
    table.string('dataType').notNullable();
    table.string('location').notNullable();
    table.float('contribution').defaultTo(0.0);
    // Add other environmental data fields as needed
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('environmental_data');
};
