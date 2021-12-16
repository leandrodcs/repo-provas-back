import { getRepository } from 'typeorm';
import Teacher from '../entities/Teacher';

async function listTeachers() {
    const teachers = await getRepository(Teacher).find();

    return teachers;
}

export {
    listTeachers,
};
