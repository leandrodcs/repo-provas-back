import { Request, Response, NextFunction } from 'express';
import * as teacherService from '../services/teacherService';

async function listCourseTeachers(req: Request, res: Response, next: NextFunction) {
    try {
        const teachers = await teacherService.listCourseTeachers();
        res.status(200).send(teachers);
    } catch (error) {
        next(error);
    }
}

export {
    listCourseTeachers,
};
