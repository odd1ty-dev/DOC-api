import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import { db } from "../config/db.config";
// import Queries from "../api/01_Doctors/0101_doctor/doctor.queries"
import path from "path";
// import Queries from '../api/01_Doctors/0101_doctors'

Model.knex(db);

export interface IAppointment {
    sAppointmentId?: string;
    sDoctorId?: string;
    sPatientId?: string;
    sPatientBloodPressure: string;
    sPatientWeight: string;
    sTreatmentNotes: string; //string length 280
    created_at?: Date;
    updated_at?: Date;
}

export class ModelAppointment extends Model {
    public sAppointmentId?: string;
    public sDoctorId?: string;
    public sPatientId?: string;
    public sPatientBloodPressure: string;
    public sPatientWeight: string;
    public sTreatmentNotes: string; //string length 280
    public created_at?: Date;
    public updated_at?: Date;

    static tableName: string = "Appointment";
    static idColumn: string | string[] = [
        "sAppointmentId",
        "sDoctorId",
        "sPatientId",
    ];

    static relationMappings: RelationMappings | RelationMappingsThunk = {
        Doctor: {
            relation: Model.HasOneRelation,
            modelClass: path.join(__dirname, "doctor.model"),
            join: {
                from: "Appointment.sDoctorId",
                to: "Doctor.sDoctorId",
            },
        },
        Patient: {
            relation: Model.HasOneRelation,
            modelClass: path.join(__dirname, "patient.model"),
            join: {
                from: "Appointment.sPatientId",
                to: "Patient.sPatientId",
            },
        },
        AppointmentMedicine: {
            relation: Model.HasManyRelation,
            modelClass: path.join(__dirname, "appointmentmedicine.model"),
            join: {
                from: "Appointment.sAppointmentId",
                to: "AppointmentMedicine.sAppointmentId",
            },
        },
    };
}
