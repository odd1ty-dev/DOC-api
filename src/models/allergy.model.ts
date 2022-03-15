import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import { db } from "../config/db.config";
// import Queries from "../api/01_Doctors/0101_doctor/doctor.queries"
import path from "path";
// import Queries from '../api/01_Doctors/0101_doctors'

Model.knex(db);

export interface IAllergy {
    sAllergyId?: string;
    sAllergyName?: string;
    created_at?: Date;
    updated_at?: Date;
}

export class ModelAllergy extends Model {
    public sAllergyId?: string;
    public sAllergyName?: string;
    public created_at?: Date;
    public updated_at?: Date;

    static tableName: string = "Allergy";
    static idColumn: string | string[] = "sAllergyId";

    static relationMappings: RelationMappings | RelationMappingsThunk = {
        PatientAllergy: {
            relation: Model.HasManyRelation,
            modelClass: path.join(__dirname, "patientallergy.model"),
            join: {
                from: "Allergy.sAllergyId",
                to: "PatientAllergy.sAllergyId",
            },
        },
    };
}
