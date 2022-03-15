import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import { db } from "../config/db.config";
// import Queries from "../api/01_Doctors/0101_doctor/doctor.queries"
import path from "path";
// import Queries from '../api/01_Doctors/0101_doctors'

Model.knex(db);

export interface IPatient {
    sPatientId?: string;
    sPatientName?: string;
    sPatientPhone?: string;
    sPatientEmail?: string;
    sPatientAddress?: string;
    sDoctorId?: string;
    tCreatedAt?: Date;
    tUpdatedAt?: Date;
}

export class ModelPatient extends Model {
    public sPatientId?: string;
    public sPatientName?: string;
    public sPatientPhone?: string;
    public sPatientEmail?: string;
    public sPatientAddress?: string;
    public sDoctorId?: string;
    public tCreatedAt?: Date;
    public tUpdatedAt?: Date;

    static tableName: string = "Patient";
    static idColumn: string | string[] = "sPatientId";

    static relationMappings: RelationMappings | RelationMappingsThunk = {
        Appointment: {
            relation: Model.HasManyRelation,
            modelClass: path.join(__dirname, "appointment.model"),
            join: {
                from: "Patient.sPatientId",
                to: "Appointment.sPatientId",
            },
        },

        Doctor: {
            relation: Model.HasOneRelation,
            modelClass: path.join(__dirname, "doctor.model"),
            join: {
                from: "Patient.sDoctorId",
                to: "Doctor.sDoctorId",
            },
        },

        PatientAllergy: {
            relation: Model.HasManyRelation,
            modelClass: path.join(__dirname, "patientallergy.model"),
            join: {
                from: "Patient.sPatientId",
                to: "PatientAllergy.sPatientId",
            },
        },
    };
}
