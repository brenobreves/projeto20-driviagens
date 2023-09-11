import dayjs from "dayjs"
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import { flightsRepository } from "../repository/flights.repository.js"
dayjs.extend(customParseFormat)

async function validateFlight(origin, destination, date){
    if(origin === destination) throw {type:"Conflict" , message: "Origem e destino iguais"}
    const now = dayjs()
    const flightDate = dayjs(date, 'DD-MM-YYYY')
    const diff = flightDate.diff(now)
    if(diff < 0) throw {type:"UnprocessableEntity" , message: "Data de vôo inválida"}
    const validateOrigin = await flightsRepository.getCityById(origin)
    if(validateOrigin.rowCount === 0) throw {type:"NotFound" , message: "Cidade de origem não encontrada"}
    const validateDestination = await flightsRepository.getCityById(destination)
    if(validateDestination.rowCount === 0) throw {type:"NotFound" , message: "Cidade de destino não encontrada"}
}

async function create(origin, destination, date){
    await flightsRepository.create(origin, destination, date)
}

async function getFlights(){
    const flights = await flightsRepository.getFlights()
    const formatedFlights = flights.rows.map((f)=>({
        id: f.id,
        origin: f.origin,
        destination: f.destination,
        date: dayjs(f.date).format('DD-MM-YYYY')
    }
    ))
    return formatedFlights
}

export const flightServices = {validateFlight, create, getFlights}