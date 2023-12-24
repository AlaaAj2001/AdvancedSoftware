exports.up = function(knex) {
    return knex.schema.createTable('messages', function(table) {
      table.increments('id').primary(); // Creates an auto-incrementing primary key 'id'
      table.string('senderUsernameOrEmail').notNullable();
      table.string('receiverUsernameOrEmail').notNullable();
      table.string('message').notNullable();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      // Add other columns as needed
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('messages');
  };
  