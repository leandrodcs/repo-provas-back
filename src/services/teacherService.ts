import * as teacherRepository from '../repositories/teacherRepository';

async function listCourseTeachers() {
    const teachers = await teacherRepository.listCourseTeachers();

    return teachers;
}

export {
    listCourseTeachers,
};
