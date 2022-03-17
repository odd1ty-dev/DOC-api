import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
        .createTable("Appointment", (table: Knex.TableBuilder) => {
            table
                .uuid("sAppointmentId")
                .unique()
                .defaultTo(knex.raw("uuid_generate_v4()"));
            table
                .uuid("sDoctorId")
                .references("sDoctorId")
                .inTable("Doctor")
                .notNullable();
            table
                .uuid("sPatientId")
                .references("sPatientId")
                .inTable("Patient")
                .notNullable();
            table.primary(["sAppointmentId", "sDoctorId", "sPatientId"]);

            table.string("sPatientBloodPressure").defaultTo("");
            table.string("sPatientWeight").defaultTo("");
            table.text("sTreatmentNotes").defaultTo("");
            table.timestamps(true, true);
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("Appointment");
}
