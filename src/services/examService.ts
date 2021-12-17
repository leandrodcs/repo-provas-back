import * as examRepository from '../repositories/examRepository';

async function getExamsByTeacher(teacherId: number) {
    const result = await examRepository.getExamsByTeacher(teacherId);

    return result;
}

export {
    getExamsByTeacher,
};
