import { db } from "../database/database.connection.js";

async function create(firstName,lastName){
    return db.query(`
        INSERT INTO passengers ("firstName", "lastName") VALUES ($1,$2);
    `,[firstName,lastName])
}

async function getPassengersTravels(){
    return await db.query(`
    SELECT 
        p."firstName",p."lastName", COUNT(*) as travels 
    FROM 
        travels t 
    JOIN 
        passengers p 
    ON 
        p.id=t."passengerId" 
    GROUP BY 
        p."firstName",p."lastName"
    ORDER BY
        travels;`)
}

export const passengersRepository = {create, getPassengersTravels}