import './setup';
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import connectDatabase from './database';
import serverMiddlewareError from './middlewares/serverMiddlewareError';
import examRouter from './routers/examRouter';
import teacherRouter from './routers/teacherRouter';
import subjectRouter from './routers/subjectRouter';
import courseRouter from './routers/courseRouter';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/courses', courseRouter);
app.use('/teachers', teacherRouter);
app.use('/subjects', subjectRouter);
app.use('/exams', examRouter);
app.get('/health', (req, res) => {
    res.sendStatus(200);
});

app.use(serverMiddlewareError);

export async function init() {
    await connectDatabase();
}

export default app;
