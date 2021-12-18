import { Request, Response, NextFunction } from 'express';
import * as categoryService from '../services/categoryService';

async function listCategories(req: Request, res: Response, next: NextFunction) {
    try {
        const categories = await categoryService.listCategories();

        res.status(200).send(categories);
    } catch (error) {
        next(error);
    }
}

export {
    listCategories,
};
