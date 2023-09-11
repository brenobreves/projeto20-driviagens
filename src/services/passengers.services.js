import { passengersRepository } from "../repository/passengers.repository.js";

async function createPassenger(firstName,lastName){
    await passengersRepository.create(firstName,lastName)
}

async function getPassengersTravels(name){
    console.log(name)
    const query = await passengersRepository.getPassengersTravelsByName(name)
    if(query.rowCount > 10) throw {type:"Too many results"}
    const passengersTravels = query.rows
    const resObj = passengersTravels.map((p)=>({
        passenger: p.firstName+" "+p.lastName,
        travels: p.travels
    }))
    return resObj
}


export const passengersServices = {createPassenger, getPassengersTravels}