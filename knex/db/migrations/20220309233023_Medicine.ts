import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
        .createTable("Medicine", (table: Knex.TableBuilder) => {
            table
                .uuid("sMedicineId")
                .unique()
                .defaultTo(knex.raw("uuid_generate_v4()"))
                .primary();
            table.string("sMedicineName").notNullable();
            table.boolean("bActive").defaultTo(true);
            table.timestamps(true, true);
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("Medicine");
}
