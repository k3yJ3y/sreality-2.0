const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'database',
  database: 'postgres',
  password: 'password',
  port: 5432,
});

module.exports = client;
