import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import { db } from "../config/db.config";
// import Queries from "../api/01_Doctors/0101_doctor/doctor.queries"
import path from "path";
// import Queries from '../api/01_Doctors/0101_doctors'

Model.knex(db);

export interface IDoctor {
    sDoctorId?: string;
    sDoctorName?: string;
    sDoctorPhone?: string;
    sSpecialtyId?: string;
    sSupervisorId?: string;
    created_at?: Date;
    updated_at?: Date;
}

export class ModelDoctor extends Model {
    public sDoctorId?: string;
    public sDoctorName?: string;
    public sDoctorPhone?: string;
    public sSpecialtyId?: string;
    public sSupervisorId?: string;
    public created_at?: Date;
    public updated_at?: Date;

    static tableName: string = "Doctor";

    static idColumn: string | string[] = "sDoctorId";

    static relationMappings: RelationMappings | RelationMappingsThunk = {
        Specialty: {
            relation: Model.HasOneRelation,
            modelClass: path.join(__dirname, "specialty.model"),
            join: {
                from: "Doctor.sSpecialtyId",
                to: "Specialty.sSpecialtyId",
            },
        },
        Doctor: {
            relation: Model.HasOneRelation,
            modelClass: ModelDoctor,
            join: {
                from: "Doctor.sSupervisorId",
                to: "Doctor.sDoctorId",
            },
        },
        Patient: {
            relation: Model.HasManyRelation,
            modelClass: path.join(__dirname, "patient.model"),
            join: {
                from: "Doctor.sDoctorId",
                to: "Patient.sDoctorId",
            },
        },
        Appointment: {
            relation: Model.HasManyRelation,
            modelClass: path.join(__dirname, "appointment.model"),
            join: {
                from: "Doctor.sDoctorId",
                to: "Appointment.sDoctorId",
            },
        },
    };
}

// export class Doctor extends Queries{}
