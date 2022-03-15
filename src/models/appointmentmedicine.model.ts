import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import { db } from "../config/db.config";
// import Queries from "../api/01_Doctors/0101_doctor/doctor.queries"
import path from "path";
import exp from "constants";

Model.knex(db);

export interface IAppointmentMedicine {
    sAppointmentId?: string;
    sMedicineId?: string;
    created_at?: Date;
    updated_at?: Date;
}

export class ModelAppointmentMedicine extends Model {
    public sAppointmentId?: string;
    public sMedicineId?: string;
    public created_at?: Date;
    public updated_at?: Date;

    static tableName: string = "AppointmentMedicine";
    static idColumn: string | string[] = ["sAppointmentId", "sMedicineId"];

    static relationMappings: RelationMappings | RelationMappingsThunk = {
        Appointment: {
            relation: Model.HasOneRelation,
            modelClass: path.join(__dirname, "appointment.model"),
            join: {
                from: "AppointmentMedicine.sAppointmentId",
                to: "Appointment.sAppointmentId",
            },
        },
        Medicine: {
            relation: Model.HasOneRelation,
            modelClass: path.join(__dirname, "medicine.model"),
            join: {
                from: "AppointmentMedicine.sMedicineId",
                to: "Medicine.sMedicineId",
            },
        },
    };
}
