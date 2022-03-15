import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .createTable('Doctor',(table:Knex.TableBuilder)=>{
        table.uuid('sDoctorId').unique().defaultTo(knex.raw('uuid_generate_v4()')).primary();
        table.string('sDoctorName').notNullable();
        table.string('sDoctorPhone').notNullable();
        table.uuid('sSpecialtyId').references('sSpecialtyId').inTable('Specialty').notNullable();
        table.uuid('sSupervisorId').references('sDoctorId').inTable('Doctor').defaultTo(null);
        table.timestamps(true,true);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('Doctor');
}


