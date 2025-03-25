import { isAuthenticated } from '../middlewares';
import { createTrip ,updateTrip} from '../controllers/gemini';
import express from 'express';

export default (router:express.Router)=>{
    router.post('/ai/create-trip',isAuthenticated,createTrip);
    router.post('/ai/update-trip/:tripId',isAuthenticated,updateTrip);
};