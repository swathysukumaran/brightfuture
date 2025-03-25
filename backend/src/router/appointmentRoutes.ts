import express from 'express';
import { getAppointmentsByStudent,createAppointment } from '../controllers/appointmentController';
import { isAuthenticated } from '../middlewares';

export default (router:express.Router)=>{
    router.get('/api/appointments',getAppointmentsByStudent);
    router.post('/api/appointments',createAppointment);
    
};