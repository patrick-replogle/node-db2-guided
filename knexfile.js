// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3", //which DBMS driver
    connection: {
      filename: "./data/produce.db3" //the of our DB
    },
    useNullAsDefault: true //necessary when using SQLite
  }
};
