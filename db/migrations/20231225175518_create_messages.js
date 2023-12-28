exports.up = function(knex) {
    return knex.schema.createTable('messages', function(table) {
      table.increments('id').primary(); 
      table.string('senderUsernameOrEmail').notNullable();
      table.string('receiverUsernameOrEmail').notNullable();
      table.string('message').notNullable();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('messages');
  };