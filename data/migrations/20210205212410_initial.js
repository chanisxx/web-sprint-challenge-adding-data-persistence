
exports.up = async function(knex) {
    await knex.schema.createTable('projects', (table) => {
        table.increments('project_id')
        table.text('project_name').notNull()
        table.text('project_description')
        table.boolean('project_completed')
    })
  
    await knex.schema.createTable('resources', (table) => {
        table.increments('resource_id')
        table.text('resource_name').notNull().unique()
        table.text('resource_description')
    })
  
    await knex.schema.createTable('tasks', (table) => {
      table.increments('task_id')
      table.text('task_description').notNull()
      table.text('task_notes')
      table.boolean('task_completed')
      table.integer('project_id')
      .notNull()
      .references('project_id')
      .inTable('projects')
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    })
  
    await knex.schema.createTable('projects_resources', (table) => {
      table
      .integer('project_id')
      .notNull()
      .references('project_id')
      .inTable('projects')
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  
      table
      .integer('resource_id')
      .notNull()
      .references("resource_id")
      .inTable('resources')
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  
      table.primary(['project_id', 'resource_id'])
    })
    
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('projects_resources')
    await knex.schema.dropTableIfExists('tasks')
    await knex.schema.dropTableIfExists('projects')
    await knex.schema.dropTableIfExists('resources')
  };
  
