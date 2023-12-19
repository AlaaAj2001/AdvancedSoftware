// migrations/timestamp_create_reports.js

exports.up = function (knex) {
    return knex.schema.createTable('reports', function (table) {
      table.uuid('id').primary();
      table.uuid('user_id').notNullable().references('id').inTable('users');
      table.string('issue_type').notNullable();
      table.text('description').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('reports');
  };
  