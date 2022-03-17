import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
        .createTable("Admin", (table: Knex.TableBuilder) => {
            table
                .uuid("sAdminId")
                .unique()
                .defaultTo(knex.raw("uuid_generate_v4()"))
                .primary();
            table.string("sAdminUsername").notNullable().unique();
            table.string("sAdminEmail").notNullable().unique();
            table.string("sPasswordHash").notNullable();
            table.boolean("bActive").defaultTo(true);
            table.boolean("bPaltformAccess").defaultTo(false);
            table.timestamps(true, true);
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("Admin");
}
