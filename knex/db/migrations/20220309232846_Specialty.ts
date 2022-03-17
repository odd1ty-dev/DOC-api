import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
        .createTable("Specialty", (table: Knex.TableBuilder) => {
            table
                .uuid("sSpecialtyId")
                .unique()
                .defaultTo(knex.raw("uuid_generate_v4()"))
                .primary();
            table.string("sSpecialtyName").unique().notNullable();
            table.timestamps(true, true);
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("Specialty");
}
