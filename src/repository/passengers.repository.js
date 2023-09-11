import { db } from "../database/database.connection.js";

async function create(firstName,lastName){
    return db.query(`
        INSERT INTO passengers ("firstName", "lastName") VALUES ($1,$2);
    `,[firstName,lastName])
}

async function getPassengersTravelsByName(name){
    return await db.query(`
    SELECT 
        p."firstName",p."lastName", COUNT(*) as travels 
    FROM 
        travels t 
    JOIN 
        passengers p 
    ON 
        p.id=t."passengerId" 
    WHERE
        p."firstName" ILIKE $1 OR p."lastName" ILIKE $1   
    GROUP BY 
        p."firstName",p."lastName"
    ORDER BY
        travels;`,['%'+name+'%'])
}
export const passengersRepository = {create,getPassengersTravelsByName}