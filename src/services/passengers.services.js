import { passengersRepository } from "../repository/passengers.repository.js";

async function createPassenger(firstName,lastName){
    await passengersRepository.create(firstName,lastName)
}

export const passengersServices = {createPassenger}