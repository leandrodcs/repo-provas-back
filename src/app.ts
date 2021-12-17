import './setup';
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import connectDatabase from './database';
import serverMiddlewareError from './middlewares/serverMiddlewareError';
import * as teacherController from './controllers/teacherController';
import * as subjectController from './controllers/subjectController';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/teachers/:courseId', teacherController.listTeachers);
app.get('/subjects/:courseId', subjectController.listSubjects);

app.get('/health', (req, res) => {
    res.sendStatus(200);
});

app.use(serverMiddlewareError);

export async function init() {
    await connectDatabase();
}

export default app;
