import { db } from "../database/database.connection.js";

async function getCityById(id){
    return await db.query(`
        SELECT * FROM cities WHERE id=$1
    `,[id])
}

async function create(origin, destination, date){
    return await db.query(`
        INSERT INTO flights (origin, destination, date) VALUES ($1,$2,$3);
    `,[origin, destination, date])
}

async function getFlights(){
    return await db.query(`
        SELECT * FROM flights ORDER BY date ASC;
        `)
}

export const flightsRepository = {getCityById, create, getFlights}