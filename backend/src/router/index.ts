import express from 'express';
import authentication from './authentication';
import users from './users';
import tutorRoutes from './tutorRoutes';
import appointmentRoutes from './appointmentRoutes';


const router=express.Router();

export default():express.Router=>{
    authentication(router);
 
    users(router);
   
    tutorRoutes(router);
    appointmentRoutes(router);
    
    return router;
}