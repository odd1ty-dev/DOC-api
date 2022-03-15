import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import { db } from "../config/db.config";
import Queries from "../api/04_Admin/0400_index/admin.queries"
import path from "path";

Model.knex(db);

export interface IAdmin {
    sAdminId?: string;
    sAdminUsername?: string;
    sPasswordHash?: string;
    sAdminEmail?: string;
    bActive?: boolean;
    created_at?: Date;
    updated_at?: Date;
}

export class ModelAdmin extends Model {
    public sAdminId?: string;
    public sAdminUsername?: string;
    public sPasswordHash?: string;
    public sAdminEmail?: string;
    public bActive?: boolean;
    public created_at?: Date;
    public updated_at?: Date;

    static tableName: string = "Admin";
    static idColumn: string | string[] = "sAdminId";
    static relationMappings: RelationMappings | RelationMappingsThunk;
}

export class Admin extends Queries {}
