import { citiesRepository } from "../repository/cities.repository.js";

async function validateNewCity(name){
    const newName = await citiesRepository.findByName(name)
    if(newName.rowCount !== 0) throw {type:"Conflict" , message: "Nome de cidade ja existe"}
    return
}

async function create(name){
    await validateNewCity(name)
    const newCity = citiesRepository.create(name)
}

export const citiesServices = {validateNewCity, create}