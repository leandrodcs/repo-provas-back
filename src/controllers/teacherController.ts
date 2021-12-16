import { Request, Response, NextFunction } from 'express';
import * as teacherService from '../services/teacherService';

async function listTeachers(req: Request, res: Response, next: NextFunction) {
    try {
        const teachers = await teacherService.listTeachers();
        res.status(200).send(teachers);
    } catch (error) {
        next(error);
    }
}

export {
    listTeachers,
};
