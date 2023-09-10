import httpStatus from "http-status"

export default function errorHandler(error, req,res,next){
    console.log(error)

    if(error.type === "Conflict") return res.status(httpStatus.CONFLICT).send(error.message)


    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Alguma coisa deu errado")
}