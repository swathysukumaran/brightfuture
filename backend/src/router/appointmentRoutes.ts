import express from 'express';
import { getAppointmentsByStudent,createAppointment } from '../controllers/appointmentController';
import { isAuthenticated } from '../middlewares';

export default (router:express.Router)=>{
    router.get('/api/appointments',isAuthenticated,getAppointmentsByStudent);
    router.post('/api/appointments',isAuthenticated,createAppointment);
    
};