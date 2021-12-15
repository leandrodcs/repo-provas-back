import './setup';
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import connectDatabase from './database';
import * as userController from './controllers/userController';
import serverMiddlewareError from './middlewares/serverMiddlewareError';
import checkHealth from './controllers/healthController';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/users', userController.getUsers);

app.get('/health', checkHealth);

app.use(serverMiddlewareError);

export async function init() {
    await connectDatabase();
}

export default app;
