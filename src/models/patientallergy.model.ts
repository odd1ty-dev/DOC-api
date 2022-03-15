import {Model , RelationMappings, RelationMappingsThunk} from "objection";
import {db} from "../config/db.config" 
// import Queries from "../api/01_Doctors/0101_doctor/doctor.queries"
import path from "path";
// import Queries from '../api/01_Doctors/0101_doctors'

Model.knex(db);

export interface IPatientAllergy{
    sAllergyId?: string;
    sPatientId?: string;
    tCreatedAt?: Date;
    tUpdatedAt?: Date;
}

export class ModelPatientAllergy extends Model{
    public sAllergyId?: string;
    public sPatientId?: string;
    public tCreatedAt?: Date;
    public tUpdatedAt?: Date;

    static tableName: string = "PatientAllergy";
    static idColumn: string | string[]= ["sAllergyId","sPatientId"];
    static relationMappings: RelationMappings | RelationMappingsThunk={
        Patient:{
            relation:Model.HasOneRelation,
            modelClass: path.join(__dirname,"patient.model"),
            join:{
                from:"PatientAllergy.sPatientId",
                to:"Patient.sPatientId"
            }
        },
        Allergy:{
            relation: Model.HasOneRelation,
            modelClass:path.join(__dirname,"allergy.model"),
            join:{
                from:"PatientAllergy.sPatientId",
                to:"Allergy.sAllergyId"
            }
        }
    };
}