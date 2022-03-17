"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
require('dotenv').config({ path: '../../.env' });
// Update with your config settings.
exports.default = {
    production: {
        client: 'pg',
        connection: process.env.DB_URL_DEV,
        searchPath: ['knex', process.env.PG_DEV_SCHEMA],
        migrations: {
            tableName: 'knex_migrations',
            directory: path_1.default.join(__dirname, '/migrations'),
        },
        seeds: {
            directory: path_1.default.join(__dirname, '/seeds')
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
