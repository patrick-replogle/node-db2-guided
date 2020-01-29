exports.up = async function(knex) {
  await knex.schema.createTable("fruits", table => {
    //table.integer('id').notNull().unique().primary()
    //increments adds all of the methods listed above
    table.increments("id");
    table
      .text("name")
      .notNull()
      .unique();
    table.float("avgWeightOz");
    table.boolean("delicious").default(false);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("fruits");
};
