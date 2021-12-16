import { getRepository } from 'typeorm';
import Teacher from '../entities/Teacher';

async function listCourseTeachers() {
    const teachers = await getRepository(Teacher).find();

    return teachers;
}

export {
    listCourseTeachers,
};
