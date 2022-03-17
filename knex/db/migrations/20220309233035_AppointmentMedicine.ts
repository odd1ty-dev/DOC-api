import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
        .createTable("AppointmentMedicine", (table: Knex.TableBuilder) => {
            table
                .uuid("sAppointmentId")
                .references("sAppointmentId")
                .inTable("Appointment")
                .notNullable();
            table
                .uuid("sMedicineId")
                .references("sMedicineId")
                .inTable("Medicine")
                .notNullable();

            table.primary(["sAppointmentId", "sMedicineId"]);
            table.timestamps(true, true);
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("AppointmentMedicine");
}
