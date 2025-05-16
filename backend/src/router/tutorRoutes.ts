import express from 'express';
import { getAllTutors,createTutor, getTutorById } from '../controllers/tutorController';
import { isAuthenticated } from '../middlewares';

export default (router:express.Router)=>{
    router.get('/api/tutors',getAllTutors);
    router.post('/api/tutors',createTutor);
    router.get('/api/tutors/:id',getTutorById);
};