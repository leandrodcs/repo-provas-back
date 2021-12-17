import * as teacherRepository from '../repositories/teacherRepository';

async function listTeachers(courseId: number) {
    const teachers = await teacherRepository.listTeachers(courseId);

    return teachers;
}

export {
    listTeachers,
};
