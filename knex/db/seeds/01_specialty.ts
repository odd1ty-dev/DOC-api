import { Knex } from "knex";    

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("Specialty").del();

    // Inserts seed entries
    let sql = await knex("Specialty").insert([
        { id: 1, colName: "rowValue1" },
        { id: 2, colName: "rowValue2" },
        { id: 3, colName: "rowValue3" }
    ]);

};
