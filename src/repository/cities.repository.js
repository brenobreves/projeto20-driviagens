import { db } from "../database/database.connection.js";

async function findByName(name){
    return await db.query(`
        SELECT * FROM cities WHERE name=$1
    `,[name])
}

async function create(name){
    return await db.query(`
        INSERT INTO cities (name) VALUES ($1);
    `,[name])
}
export const citiesRepository = {findByName,create}