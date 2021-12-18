import { Request, Response, NextFunction } from 'express';
import { validadeExam } from '../schemas/examSchema';
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

async function getExamsBySubject(req: Request, res: Response, next: NextFunction) {
    const {
        subjectId,
    } = req.params;
    try {
        const exams = await examService.getExamsBySubject(Number(subjectId));
        res.status(200).send(exams);
    } catch (error) {
        next(error);
    }
}

async function createExam(req: Request, res: Response, next: NextFunction) {
    try {
        const checkValidation = validadeExam(req.body);

        if (checkValidation) res.status(400).send(checkValidation);

        await examService.createExam(req.body);

        res.sendStatus(201);
    } catch (error) {
        next(error);
    }
}

export {
    getExamsByTeacher,
    getExamsBySubject,
    createExam,
};
