/* eslint-disable no-undef */
import supertest from 'supertest';
import { getConnection } from 'typeorm';

import app, { init } from '../../src/app';

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});

describe('GET /courses', () => {
    it('should return status 200', async () => {
        const response = await supertest(app).get('/courses');
        expect(response.status).toEqual(200);
    });
});

describe('GET /categories', () => {
    it('should return status 200', async () => {
        const response = await supertest(app).get('/categories');
        expect(response.status).toEqual(200);
    });
});

describe('GET /subjects/courseId', () => {
    it('should return status 400', async () => {
        const response = await supertest(app).get('/subjects/a');
        expect(response.status).toEqual(400);
    });

    it('should return status 200', async () => {
        const response = await supertest(app).get('/subjects/1');
        expect(response.status).toEqual(200);
    });
});

describe('GET /subjects/subjectId/teachers', () => {
    it('should return status 400', async () => {
        const response = await supertest(app).get('/subjects/a/teachers');
        expect(response.status).toEqual(400);
    });

    it('should return status 200', async () => {
        const response = await supertest(app).get('/subjects/1/teachers');
        expect(response.status).toEqual(200);
    });
});

describe('GET /teachers/courseId', () => {
    it('should return status 400', async () => {
        const response = await supertest(app).get('/teachers/a');
        expect(response.status).toEqual(400);
    });

    it('should return status 200', async () => {
        const response = await supertest(app).get('/teachers/1');
        expect(response.status).toEqual(200);
    });
});
