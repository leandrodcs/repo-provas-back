/* eslint-disable no-undef */
import supertest from 'supertest';
import { getConnection } from 'typeorm';

import app, { init } from '../../src/app';
import { createFakeExam } from '../factories/examFactory';
import { clearDatabase } from '../utils/database';

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await clearDatabase();
    await getConnection().close();
});

const fakeExam = createFakeExam();

describe('POST /exams', () => {
    it('should return status 201', async () => {
        const response = await supertest(app).post('/exams').send(fakeExam);
        expect(response.status).toEqual(201);
    });

    it('should return status 400 for invalid name', async () => {
        const invalidBody = createFakeExam();
        invalidBody.name = '';
        const response = await supertest(app).post('/exams').send(invalidBody);
        expect(response.status).toEqual(400);
    });

    it('should return status 400 for invalid url', async () => {
        const invalidBody = createFakeExam();
        invalidBody.exam = '';
        const response = await supertest(app).post('/exams').send(invalidBody);
        expect(response.status).toEqual(400);
    });
});

describe('GET /exams', () => {
    it('should return inserted exam', async () => {
        const response = await supertest(app).get(`/exams/teacher/${fakeExam.teacherId}`);
        expect(response.body[0].name).toEqual(fakeExam.name);
    });

    it('should return inserted exam', async () => {
        const response = await supertest(app).get(`/exams/subject/${fakeExam.subjectId}`);
        expect(response.body[0].name).toEqual(fakeExam.name);
    });
});
