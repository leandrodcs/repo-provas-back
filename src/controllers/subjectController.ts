import { Request, Response, NextFunction } from 'express';
import * as subjectService from '../services/subjectService';

async function listSubjects(req: Request, res: Response, next: NextFunction) {
    const {
        courseId,
    } = req.params;
    try {
        if (!courseId || Number(courseId) <= 0) {
            return res.status(400).send('Insira um número inteiro maior que 0');
        }

        const subjects = await subjectService.listSubjects(Number(courseId));
        res.status(200).send(subjects);
    } catch (error) {
        next(error);
    }
}

async function listSubjectTeachers(req: Request, res: Response, next: NextFunction) {
    const {
        subjectId,
    } = req.params;
    try {
        const subjectTeachers = await subjectService.listSubjectTeachers(Number(subjectId));

        res.status(200).send(subjectTeachers);
    } catch (error) {
        next(error);
    }
}

export {
    listSubjects,
    listSubjectTeachers,
};
