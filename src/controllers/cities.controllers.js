import httpStatus from "http-status"
import { citiesServices } from "../services/cities.services.js"

export async function postCity(req,res){
    const {name} = req.body
    const create = await citiesServices.create(name)
    res.send(`Cidade "${name}" criada`) 
}