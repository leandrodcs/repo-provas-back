import * as examRepository from '../repositories/examRepository';

async function getExamsByTeacher(teacherId: number) {
    const result = await examRepository.getExamsByTeacher(teacherId);

    return result;
}

async function getExamsBySubject(subjectId: number) {
    const result = await examRepository.getExamsBySubject(subjectId);

    return result;
}

export {
    getExamsByTeacher,
    getExamsBySubject,
};
