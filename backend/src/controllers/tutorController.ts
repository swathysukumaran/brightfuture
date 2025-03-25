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
