import './setup';
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import connectDatabase from './database';
import serverMiddlewareError from './middlewares/serverMiddlewareError';
import * as healthController from './controllers/healthController';
import * as teacherController from './controllers/teacherController';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/teachers', teacherController.listCourseTeachers);

app.get('/health', healthController.checkHealth);

app.use(serverMiddlewareError);

export async function init() {
    await connectDatabase();
}

export default app;
