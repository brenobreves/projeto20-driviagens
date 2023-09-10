import { db } from "../database/database.connection.js";

async function create(firstName,lastName){
    return db.query(`
        INSERT INTO passengers ("firstName", "lastName") VALUES ($1,$2);
    `,[firstName,lastName])
}

export const passengersRepository = {create}