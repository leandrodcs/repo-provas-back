import { Request, Response, NextFunction } from 'express';

async function getExamsByTeacher(req: Request, res: Response, next: NextFunction) {
    try {
        res.status(200).send('ok');
    } catch (error) {
        next(error);
    }
}

export {
    getExamsByTeacher,
};
