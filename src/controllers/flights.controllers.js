export function postFlight(req,res){
    const {origin, destination, date} = req.body
    res.send(`Post Flight ${origin} ${destination} ${date}`)
}

export function getFlights(req,res){
    res.send("Get Flights")
}