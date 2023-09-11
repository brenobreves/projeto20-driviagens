import { passengersRepository } from "../repository/passengers.repository.js";

async function createPassenger(firstName,lastName){
    await passengersRepository.create(firstName,lastName)
}

async function getPassengersTravels(){
    const query = await passengersRepository.getPassengersTravels()
    const passengersTravels = query.rows
    const resObj = passengersTravels.map((p)=>({
        passenger: p.firstName+" "+p.lastName,
        travels: p.travels
    }))
    return resObj
}


export const passengersServices = {createPassenger, getPassengersTravels}