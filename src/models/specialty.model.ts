import {Model , RelationMappings, RelationMappingsThunk} from "objection";
import {db} from "../config/db.config" 
// import Queries from "../api/01_Doctors/0101_doctor/doctor.queries"
import path from "path";
// import Queries from '../api/01_Doctors/0101_doctors'

Model.knex(db);

export interface ISpecialty{
    sSpecialtyId?: string;
    sSpecialtyName?: string;
    tCreatedAt: Date;
    tUpdtedAt: Date;
}

export class ModelSpecialty extends Model{
    public sSpecialtyId?: string;
    public sSpecialtyName?: string;
    public tCreatedAt: Date;
    public tUpdtedAt: Date;

    static tableName: string= "Specialty";
    static idColumn: string | string[];
    static relationMappings: RelationMappings | RelationMappingsThunk={
        Doctor:{
            relation: Model.HasManyRelation,
            modelClass: path.join(__dirname,"specialty.model"),
            join:{
                from:"Specialty.sSpecialtyId",
                to:"Doctor.sSpecialtyId"
            }
        }
    };
}