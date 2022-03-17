"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelAppointment = void 0;
const objection_1 = require("objection");
const db_config_1 = require("../config/db.config");
// import Queries from "../api/01_Doctors/0101_doctor/doctor.queries"
const path_1 = __importDefault(require("path"));
// import Queries from '../api/01_Doctors/0101_doctors'
objection_1.Model.knex(db_config_1.db);
class ModelAppointment extends objection_1.Model {
}
exports.ModelAppointment = ModelAppointment;
ModelAppointment.tableName = "Appointment";
ModelAppointment.idColumn = [
    "sAppointmentId",
    "sDoctorId",
    "sPatientId",
];
ModelAppointment.relationMappings = {
    Doctor: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: path_1.default.join(__dirname, "doctor.model"),
        join: {
            from: "Appointment.sDoctorId",
            to: "Doctor.sDoctorId",
        },
    },
    Patient: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: path_1.default.join(__dirname, "patient.model"),
        join: {
            from: "Appointment.sPatientId",
            to: "Patient.sPatientId",
        },
    },
    AppointmentMedicine: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: path_1.default.join(__dirname, "appointmentmedicine.model"),
        join: {
            from: "Appointment.sAppointmentId",
            to: "AppointmentMedicine.sAppointmentId",
        },
    },
};
