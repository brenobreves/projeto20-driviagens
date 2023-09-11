import { passengersServices } from "../services/passengers.services.js"

export async function postPassenger(req,res){
    const {firstName, lastName} = req.body
    await passengersServices.createPassenger(firstName,lastName)
    res.send(`Passenger ${firstName} ${lastName} criado`)
}

export async function getPassengerTravels(req,res){
    const returnObj = await passengersServices.getPassengersTravels()
    res.send(returnObj)
}