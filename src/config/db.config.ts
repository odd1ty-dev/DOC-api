import knexconfig from '../../knex/db/knexfile';

const environment = process.env.NODE_ENV || 'development';


const config:any = knexconfig[environment];

const db = require("knex")(config);

async function RawQuery(raw:string):Promise<any>{
    const query = await db.schema.raw(raw);
    return query.rows.length != 1 ? query.rows : query.rows[0];
}

export {db,RawQuery};