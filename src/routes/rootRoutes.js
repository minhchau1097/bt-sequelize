import express from "express";
import resRoute from "./resRoutes.js";
import orderRoute from "./orderRoutes.js";

const rootRoute = express.Router();


rootRoute.use('/restaurant', resRoute)
rootRoute.use('/order', orderRoute)

export default rootRoute