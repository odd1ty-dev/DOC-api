import { table } from "console";
import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(
        "TemporalRecoveryPassword",
        (table: Knex.TableBuilder) => {
            table.uuid("sRecoverytoekn").unique().primary();
            table
                .uuid("sAdminId")
                .references("sAdminId")
                .inTable("Admin")
                .notNullable();
            table.timestamps(true, true);
        }
    );
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("TemporalRecoveryPassword");
}
