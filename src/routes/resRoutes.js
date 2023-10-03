import express from "express";
import { disLikeRes, likeRes, listLikeRes, listLikeUser, listRateRes, listRateUser, rateRes } from "../controller/resController.js";


 const resRoute = express.Router();

resRoute.get('/list-like-res',listLikeRes)
resRoute.get('/list-like-user',listLikeUser)
resRoute.get('/list-rate-res',listRateRes)
resRoute.get('/list-rate-user',listRateUser)

resRoute.post('/like',likeRes)

resRoute.post('/rate',rateRes)


resRoute.delete('/dis-like',disLikeRes)

 export default resRoute;