import * as teacherRepository from '../repositories/teacherRepository';
import * as examRepository from '../repositories/examRepository';

async function listTeachers(courseId: number) {
    const result = await teacherRepository.listTeachers(courseId);

    const exams = await examRepository.getAllExams();
    const teachers = [];

    for (let i = 0; i < result.length; i++) {
        teachers.push({
            ...result[i],
            examCount: exams.filter((exam) => exam.teacherId === result[i].id).length,
        });
    }

    return teachers;
}

export {
    listTeachers,
};
