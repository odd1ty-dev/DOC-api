import path from 'path';
require('dotenv').config({path:'../../.env'})

// Update with your config settings.

export default {
  development: {
    client: 'pg',
    connection: process.env.DB_URL_DEV,
    searchPath: ['knex', process.env.PG_DEV_SCHEMA],
    migrations:{
      tableName:'knex_migrations',
      directory: path.join(__dirname,'/migrations'),
    },
    seeds:{
      directory: path.join(__dirname,'/seeds')
    }
  }

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // },

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // }

};