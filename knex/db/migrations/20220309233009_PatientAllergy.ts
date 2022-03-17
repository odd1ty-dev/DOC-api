import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
        .createTable("PatientAllergy", (table: Knex.TableBuilder) => {
            table
                .uuid("sAllergyId")
                .references("sAllergyId")
                .inTable("Allergy")
                .notNullable();
            table
                .uuid("sPatientId")
                .references("sPatientId")
                .inTable("Patient")
                .notNullable();
            table.primary(["sAllergyId", "sPatientId"]);
            table.timestamps(true, true);
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("PatientAllergy");
}
