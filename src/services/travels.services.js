import { travelsRepository } from "../repository/travels.repository.js";

async function validateIds(passengerId, flightId){
    const passenger = await travelsRepository.getPassengerById(passengerId)
    const flight = await travelsRepository.getFlightById(flightId)
    if(passenger.rowCount === 0) throw {type:"NotFound" , message: "Passageiro não encontrado"}
    if(flight.rowCount === 0) throw {type:"NotFound" , message: "Vôo não encontrado"}
}

async function createTravel(passengerId,flightId){
    await travelsRepository.create(passengerId,flightId)
}

export const travelsServices = {validateIds, createTravel}