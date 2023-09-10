import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { passengerSchema } from "../schemas/passengers.schemas.js";
import { getPassengerTravels, postPassenger } from "../controllers/passengers.controllers.js";

const passengersRouter = Router();

passengersRouter.post('/passengers',validateSchema(passengerSchema),postPassenger)
passengersRouter.get('/passengers/travels',getPassengerTravels)

export default passengersRouter