/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// eslint-disable-next-line object-curly-newline
import { Request, Response, NextFunction, Errback } from 'express';

export default async function serverMiddlewareError(err: Errback, req: Request, res: Response, next: NextFunction) {
    console.log(err);
    return res.sendStatus(500);
}
