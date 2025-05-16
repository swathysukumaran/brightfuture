const Tutor = require('../db/Tutor');
import { Request, Response } from 'express';
export const getAllTutors = async (req: Request, res: Response) => {
    try {
       
        const tutors = await Tutor.find();
     
        res.json(tutors);
        return;
    } catch (error) {
        res.status(500).json({ message: error.message });
        return;
    }
};

export const createTutor = async (req:Request, res:Response) => {
    const tutor = new Tutor(req.body);
    try {
        const newTutor = await tutor.save();
        res.status(201).json(newTutor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getTutorById = async (req: Request, res: Response) => {
    try {
        const tutor = await Tutor.findById(req.params.id);
        if (!tutor) {
            return res.status(404).json({ message: 'Tutor not found' });
        }
        res.json(tutor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};