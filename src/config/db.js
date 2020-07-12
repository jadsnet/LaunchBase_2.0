const { Pool } = require('pg')

module.exports = new Pool({
  user: 'postgres',
  password: 'super',
  host: 'localhost',
  port: '5432',
  database: 'dogmanager'
})