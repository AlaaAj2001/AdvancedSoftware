exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('username').notNullable();
      table.string('email').notNullable().unique();
      table.integer('sustainabilityScore').defaultTo(0);
      // Add other user-related fields as needed
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users');
  };
  