"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelAppointmentMedicine = void 0;
const objection_1 = require("objection");
const db_config_1 = require("../config/db.config");
// import Queries from "../api/01_Doctors/0101_doctor/doctor.queries"
const path_1 = __importDefault(require("path"));
objection_1.Model.knex(db_config_1.db);
class ModelAppointmentMedicine extends objection_1.Model {
}
exports.ModelAppointmentMedicine = ModelAppointmentMedicine;
ModelAppointmentMedicine.tableName = "AppointmentMedicine";
ModelAppointmentMedicine.idColumn = ["sAppointmentId", "sMedicineId"];
ModelAppointmentMedicine.relationMappings = {
    Appointment: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: path_1.default.join(__dirname, "appointment.model"),
        join: {
            from: "AppointmentMedicine.sAppointmentId",
            to: "Appointment.sAppointmentId",
        },
    },
    Medicine: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: path_1.default.join(__dirname, "medicine.model"),
        join: {
            from: "AppointmentMedicine.sMedicineId",
            to: "Medicine.sMedicineId",
        },
    },
};
