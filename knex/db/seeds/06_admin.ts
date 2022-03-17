import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("Admin").del();

    // Inserts seed entries
    await knex("Admin").insert([
        {
            sAdminUsername: "odd1ty",
            sAdminEmail: "andres.aldape@sofex.com.mx",
            sPasswordHash:
                "$2a$10$hq30Rk9To.A.99POSka90e81Vv8c4imrUU/CinvSIsYdS7nKUGwSa",
        },
    ]);
}
