"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPatientAllergy = void 0;
const objection_1 = require("objection");
const db_config_1 = require("../config/db.config");
// import Queries from "../api/01_Doctors/0101_doctor/doctor.queries"
const path_1 = __importDefault(require("path"));
// import Queries from '../api/01_Doctors/0101_doctors'
objection_1.Model.knex(db_config_1.db);
class ModelPatientAllergy extends objection_1.Model {
}
exports.ModelPatientAllergy = ModelPatientAllergy;
ModelPatientAllergy.tableName = "PatientAllergy";
ModelPatientAllergy.idColumn = ["sAllergyId", "sPatientId"];
ModelPatientAllergy.relationMappings = {
    Patient: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: path_1.default.join(__dirname, "patient.model"),
        join: {
            from: "PatientAllergy.sPatientId",
            to: "Patient.sPatientId"
        }
    },
    Allergy: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: path_1.default.join(__dirname, "allergy.model"),
        join: {
            from: "PatientAllergy.sPatientId",
            to: "Allergy.sAllergyId"
        }
    }
};
