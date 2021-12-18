import { getRepository } from 'typeorm';
import Exam from '../entities/Exam';

async function getExamsByTeacher(teacherId: number) {
    const result = await getRepository(Exam).find({
        relations: ['teacher', 'subject'],
        where: { teacherId },
    });

    return result;
}

async function getExamsBySubject(subjectId: number) {
    const result = await getRepository(Exam).find({
        relations: ['teacher', 'subject'],
        where: { subjectId },
    });

    return result;
}

async function getAllExams() {
    const result = await getRepository(Exam).find();

    return result;
}

export {
    getExamsByTeacher,
    getExamsBySubject,
    getAllExams,
};
