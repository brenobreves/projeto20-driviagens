import httpStatus from "http-status"

export default function errorHandler(error, req,res,next){
    console.log(error)

    if(error.type === "Conflict") return res.status(httpStatus.CONFLICT).send(error.message)
    if(error.type === "NotFound") return res.status(httpStatus.NOT_FOUND).send(error.message)
    if(error.type === "UnprocessableEntity") return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
    if(error.type === "Too many results") return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.type)


    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Alguma coisa deu errado")
}