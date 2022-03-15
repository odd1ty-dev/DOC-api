import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import { db } from "../config/db.config";
// import Queries from "../api/01_Doctors/0101_doctor/doctor.queries"
import path from "path";
// import Queries from '../api/01_Doctors/0101_doctors'

Model.knex(db);

export interface IMedicine {
    sMedicineId?: string;
    sMedicineName?: string;
    bActive?: boolean;
    tCreatedAt?: Date;
    tUpdatedAt?: Date;
}

export class ModelMedicine extends Model {
    public sMedicineId?: string;
    public sMedicineName?: string;
    public bActive?: boolean;
    public tCreatedAt?: Date;
    public tUpdatedAt?: Date;

    static tableName: string = "Medicine";

    static idColumn: string | string[] = "sMedicineId";

    static relationMappings: RelationMappings | RelationMappingsThunk = {
        AppointmentMedicine: {
            relation: Model.HasManyRelation,
            modelClass: path.join(__dirname, "appointmentmedicine.model"),
            join: {
                from: "Medicine.sMedicineId",
                to: "AppointmentMedicine.sMedicineId",
            },
        },
    };
}
