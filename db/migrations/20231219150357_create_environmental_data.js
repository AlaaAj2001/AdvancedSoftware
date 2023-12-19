// migrations/20231219145512_create_environmental_data.js

exports.up = function (knex) {
    return knex.schema.createTable('environmental_data', function (table) {
      table.uuid('id').primary();
      table.uuid('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
      table.string('source').notNullable();
      table.float('air_quality');
      table.float('temperature');
      table.float('humidity');
      table.float('water_quality');
      table.float('biodiversity_metrics');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('environmental_data');
  };
  