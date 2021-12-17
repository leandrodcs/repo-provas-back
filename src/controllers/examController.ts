import { Request, Response, NextFunction } from 'express';
import * as examService from '../services/examService';

async function getExamsByTeacher(req: Request, res: Response, next: NextFunction) {
    const {
        teacherId,
    } = req.params;
    try {
        const exams = await examService.getExamsByTeacher(Number(teacherId));
        res.status(200).send(exams);
    } catch (error) {
        next(error);
    }
}

export {
    getExamsByTeacher,
};