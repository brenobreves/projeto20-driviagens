import { passengersServices } from "../services/passengers.services.js"

export async function postPassenger(req,res){
    const {firstName, lastName} = req.body
    await passengersServices.createPassenger(firstName,lastName)
    res.send(`Passenger ${firstName} ${lastName} criado`)
}

export async function getPassengerTravels(req,res){
    let name
    if(req.query.name) {
        name = req.query.name
    }else{
        name= ""
    }
    console.log(name)
    if(!name) name=""
    console.log(name)
    const returnObj = await passengersServices.getPassengersTravels(name)
    res.send(returnObj)
}