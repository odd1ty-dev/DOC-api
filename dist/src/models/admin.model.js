"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = exports.ModelAdmin = void 0;
const objection_1 = require("objection");
const db_config_1 = require("../config/db.config");
const admin_queries_1 = __importDefault(require("../api/04_Admin/0400_index/admin.queries"));
objection_1.Model.knex(db_config_1.db);
class ModelAdmin extends objection_1.Model {
}
exports.ModelAdmin = ModelAdmin;
ModelAdmin.tableName = "Admin";
ModelAdmin.idColumn = "sAdminId";
class Admin extends admin_queries_1.default {
}
exports.Admin = Admin;
