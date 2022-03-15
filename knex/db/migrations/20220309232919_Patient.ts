import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .createTable('Patient',(table:Knex.TableBuilder)=>{
        table.uuid('sPatientId').unique().defaultTo(knex.raw('uuid_generate_v4()')).primary();
        table.string('sPatientName').notNullable();
        table.string('sPatientPhone').notNullable();
        table.string('sPatientEmail').defaultTo('');
        table.string('sPatientAddress');
        table.uuid('sDoctorId').references('sDoctorId').inTable('Doctor').defaultTo(null);
        table.timestamps(true,true);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('Patient');
}

