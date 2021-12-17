import { Request, Response, NextFunction } from 'express';
import * as subjectService from '../services/subjectService';

async function listSubjects(req: Request, res: Response, next: NextFunction) {
    const {
        courseId,
    } = req.params;
    try {
        const subjects = await subjectService.listSubjects(Number(courseId));
        res.status(200).send(subjects);
    } catch (error) {
        next(error);
    }
}

export {
    listSubjects,
};
