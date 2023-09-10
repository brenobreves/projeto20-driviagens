import { db } from "../database/database.connection.js";

async function getPassengerById(id){
    return await db.query(`
        SELECT * FROM passengers WHERE id=$1;
    `,[id])
}
async function getFlightById(id){
    return await db.query(`
        SELECT * FROM flights WHERE id=$1;
    `,[id])
}

async function create(passengerId,flightId){
    return db.query(`
        INSERT INTO travels ("passengerId", "flightId") VALUES ($1,$2);
    `,[passengerId,flightId])
}

export const travelsRepository = {getPassengerById, getFlightById, create}
