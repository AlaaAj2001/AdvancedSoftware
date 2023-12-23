exports.up = function (knex) {
    return knex.schema.createTable('sustainability_scores', function (table) {
      table.uuid('id').primary();
      table.uuid('user_id').references('userID').inTable('users').notNullable(); // Foreign key to the users table
      table.float('score').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('sustainability_scores');
  };
