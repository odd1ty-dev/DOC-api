"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelSpecialty = void 0;
const objection_1 = require("objection");
const db_config_1 = require("../config/db.config");
// import Queries from "../api/01_Doctors/0101_doctor/doctor.queries"
const path_1 = __importDefault(require("path"));
// import Queries from '../api/01_Doctors/0101_doctors'
objection_1.Model.knex(db_config_1.db);
class ModelSpecialty extends objection_1.Model {
}
exports.ModelSpecialty = ModelSpecialty;
ModelSpecialty.tableName = "Specialty";
ModelSpecialty.relationMappings = {
    Doctor: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: path_1.default.join(__dirname, "specialty.model"),
        join: {
            from: "Specialty.sSpecialtyId",
            to: "Doctor.sSpecialtyId"
        }
    }
};
