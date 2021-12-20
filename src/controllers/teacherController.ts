import { Request, Response, NextFunction } from 'express';
import * as teacherService from '../services/teacherService';

async function listTeachers(req: Request, res: Response, next: NextFunction) {
    const {
        courseId,
    } = req.params;
    try {
        if (!courseId || Number(courseId) <= 0 || !Number(courseId)) {
            return res.status(400).send('Insira um número inteiro maior que 0');
        }

        const teachers = await teacherService.listTeachers(Number(courseId));
        res.status(200).send(teachers);
    } catch (error) {
        next(error);
    }
}

export {
    listTeachers,
};
