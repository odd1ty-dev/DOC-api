"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelAllergy = void 0;
const objection_1 = require("objection");
const db_config_1 = require("../config/db.config");
// import Queries from "../api/01_Doctors/0101_doctor/doctor.queries"
const path_1 = __importDefault(require("path"));
// import Queries from '../api/01_Doctors/0101_doctors'
objection_1.Model.knex(db_config_1.db);
class ModelAllergy extends objection_1.Model {
}
exports.ModelAllergy = ModelAllergy;
ModelAllergy.tableName = "Allergy";
ModelAllergy.idColumn = "sAllergyId";
ModelAllergy.relationMappings = {
    PatientAllergy: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: path_1.default.join(__dirname, "patientallergy.model"),
        join: {
            from: "Allergy.sAllergyId",
            to: "PatientAllergy.sAllergyId",
        },
    },
};
