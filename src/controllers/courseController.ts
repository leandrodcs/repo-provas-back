import { Request, Response, NextFunction } from 'express';
import * as courseService from '../services/courseService';

async function listCourses(req: Request, res: Response, next: NextFunction) {
    try {
        const courses = await courseService.listCourses();

        res.status(200).send(courses);
    } catch (error) {
        next(error);
    }
}

export {
    listCourses,
};
