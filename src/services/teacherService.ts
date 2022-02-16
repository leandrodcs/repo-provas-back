import * as teacherRepository from '../repositories/teacherRepository';
import * as examRepository from '../repositories/examRepository';

async function listTeachers(courseId: number) {
    const result = await teacherRepository.listTeachers(courseId);

    const exams = await examRepository.getAllExams();
    const hashExams: any = {};

    exams.forEach((exam) => {
        if (!hashExams[exam.teacherId]) {
            hashExams[exam.teacherId] = 1;
        } else {
            hashExams[exam.teacherId]++;
        }
    });

    return result.map((r) => ({
        ...r,
        examCount: hashExams[r.id] || 0,
    }));
}

export {
    listTeachers,
};
