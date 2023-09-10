export function postPassenger(req,res){
    const {firstName, lastName} = req.body
    res.send(`Post Passenger ${firstName} ${lastName}`)
}

export function getPassengerTravels(req,res){
    res.send("Get Passenger Travels")
}