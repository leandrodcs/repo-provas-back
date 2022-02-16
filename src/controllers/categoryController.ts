import { Request, Response, NextFunction } from 'express';
import * as categoryService from '../services/categoryService';

async function listCategories(req: Request, res: Response, next: NextFunction) {
    try {
        const categories = await categoryService.listCategories();

        res.status(200).send(categories);
    } catch (error) {
        if (error.name === 'NotFoundError') {
            return res.status(404).send(error.message);
        }
        next(error);
    }
}

export {
    listCategories,
};
