// 2023xxxx_create_tables.js
exports.up = function (knex) {
    return Promise.all([
      // Users Table
      knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('username').notNullable();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        // Add other user-related fields as needed
      }),
  
      // Environmental Data Table
      knex.schema.createTable('environmental_data', function (table) {
        table.increments('id').primary();
        table.integer('userId').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.string('type').notNullable();
        table.float('value').notNullable();
        table.timestamp('timestamp').defaultTo(knex.fn.now());
        // Add other environmental data fields as needed
      }),
  
      // Alerts Table
      knex.schema.createTable('alerts', function (table) {
        table.increments('id').primary();
        table.integer('userId').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.string('message').notNullable();
        table.boolean('read').defaultTo(false);
        table.timestamp('timestamp').defaultTo(knex.fn.now());
      }),
    ]);
  };
  
  exports.down = function (knex) {
    return Promise.all([
      knex.schema.dropTable('alerts'),
      knex.schema.dropTable('environmental_data'),
      knex.schema.dropTable('users'),
    ]);
  };
  