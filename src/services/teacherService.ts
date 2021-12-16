import * as teacherRepository from '../repositories/teacherRepository';

async function listTeachers() {
    const teachers = await teacherRepository.listTeachers();

    return teachers;
}

export {
    listTeachers,
};
