import { getRepository } from 'typeorm';
import Course from '../entities/Course';

async function listCourses() {
    const result = await getRepository(Course).find();

    if (!result.length) return [];

    return result;
}

export {
    listCourses,
};
