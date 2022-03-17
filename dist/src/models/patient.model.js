"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPatient = void 0;
const objection_1 = require("objection");
const db_config_1 = require("../config/db.config");
// import Queries from "../api/01_Doctors/0101_doctor/doctor.queries"
const path_1 = __importDefault(require("path"));
// import Queries from '../api/01_Doctors/0101_doctors'
objection_1.Model.knex(db_config_1.db);
class ModelPatient extends objection_1.Model {
}
exports.ModelPatient = ModelPatient;
ModelPatient.tableName = "Patient";
ModelPatient.idColumn = "sPatientId";
ModelPatient.relationMappings = {
    Appointment: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: path_1.default.join(__dirname, "appointment.model"),
        join: {
            from: "Patient.sPatientId",
            to: "Appointment.sPatientId",
        },
    },
    Doctor: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: path_1.default.join(__dirname, "doctor.model"),
        join: {
            from: "Patient.sDoctorId",
            to: "Doctor.sDoctorId",
        },
    },
    PatientAllergy: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: path_1.default.join(__dirname, "patientallergy.model"),
        join: {
            from: "Patient.sPatientId",
            to: "PatientAllergy.sPatientId",
        },
    },
};
