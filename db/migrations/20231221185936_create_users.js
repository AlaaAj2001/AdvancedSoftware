exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
      table.uuid('userId').primary();
      table.string('username', 255).notNullable();
      table.string('email', 255).notNullable();
      table.string('password', 255).notNullable(); // Note: Store hashed passwords for security
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users');
  };
  

