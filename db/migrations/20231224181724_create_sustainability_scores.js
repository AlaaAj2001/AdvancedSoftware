exports.up = function (knex) {
    return knex.schema.createTable('sustainability_scores', function (table) {
      table.increments('id').primary();
      table.string('username').notNullable();
      table.float('finalScore').notNullable();
      table.string('mostEnteredDataType');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('sustainability_scores');
  };
  