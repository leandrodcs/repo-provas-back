import * as teacherRepository from '../repositories/teacherRepository';

async function listCourseTeachers(courseId: number) {
    const teachers = await teacherRepository.listCourseTeachers(courseId);

    return teachers;
}

export {
    listCourseTeachers,
};
