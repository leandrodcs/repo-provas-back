import { Request, Response, NextFunction } from 'express';
import * as courseService from '../services/courseService';

async function listCourses(req: Request, res: Response, next: NextFunction) {
    try {
        const courses = await courseService.listCourses();

        res.status(200).send(courses);
    } catch (error) {
        if (error.name === 'NotFoundError') {
            return res.status(404).send(error.message);
        }
        next(error);
    }
}

export {
    listCourses,
};
