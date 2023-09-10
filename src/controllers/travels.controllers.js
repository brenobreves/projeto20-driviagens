import { travelsServices } from "../services/travels.services.js"

export async function postTravel(req,res){
    const{ passengerId, flightId} = req.body
    await travelsServices.validateIds(passengerId,flightId)
    await travelsServices.createTravel(passengerId,flightId)
    res.send(`Passageiro de id:${passengerId} registrado no Vôo de id:${flightId}`)
}