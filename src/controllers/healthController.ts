import { Request, Response, NextFunction } from 'express';

export default async function checkHealth(req: Request, res: Response, next: NextFunction) {
    try {
        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
}