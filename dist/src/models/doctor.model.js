"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelDoctor = void 0;
const objection_1 = require("objection");
const db_config_1 = require("../config/db.config");
// import Queries from "../api/01_Doctors/0101_doctor/doctor.queries"
const path_1 = __importDefault(require("path"));
// import Queries from '../api/01_Doctors/0101_doctors'
objection_1.Model.knex(db_config_1.db);
class ModelDoctor extends objection_1.Model {
}
exports.ModelDoctor = ModelDoctor;
ModelDoctor.tableName = "Doctor";
ModelDoctor.idColumn = "sDoctorId";
ModelDoctor.relationMappings = {
    Specialty: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: path_1.default.join(__dirname, "specialty.model"),
        join: {
            from: "Doctor.sSpecialtyId",
            to: "Specialty.sSpecialtyId",
        },
    },
    Doctor: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: ModelDoctor,
        join: {
            from: "Doctor.sSupervisorId",
            to: "Doctor.sDoctorId",
        },
    },
    Patient: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: path_1.default.join(__dirname, "patient.model"),
        join: {
            from: "Doctor.sDoctorId",
            to: "Patient.sDoctorId",
        },
    },
    Appointment: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: path_1.default.join(__dirname, "appointment.model"),
        join: {
            from: "Doctor.sDoctorId",
            to: "Appointment.sDoctorId",
        },
    },
};
// export class Doctor extends Queries{}
