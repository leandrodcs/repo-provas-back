import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/userService';

export async function getUsers(req: Request, res: Response, next: NextFunction) {
    try {
        const users = await userService.getUsers();
        res.send(users);
    } catch (error) {
        next(error);
    }
}
