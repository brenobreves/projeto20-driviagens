import { flightServices } from "../services/flights.services.js"

export async function postFlight(req,res){
    const {origin, destination, date} = req.body
    await flightServices.validateFlight(origin, destination, date)
    await flightServices.create(origin, destination, date)
    res.send(`Vôo partindo da cidade de id:${origin} com destino para id:${destination} no dia:${date} criado`)
}

export function getFlights(req,res){
    res.send("Get Flights")
}