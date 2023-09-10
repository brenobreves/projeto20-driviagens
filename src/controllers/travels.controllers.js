export function postTravel(req,res){
    const{ passengerId, flightId} = req.body
    res.send(`PostTravel ${passengerId} ${flightId}`)
}