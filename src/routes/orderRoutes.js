import express from "express";
import { order } from "../controller/orderController.js";

 const orderRoute = express.Router();

orderRoute.post('/',order)
 export default orderRoute;