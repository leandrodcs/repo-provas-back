import { getConnection, getRepository } from 'typeorm';
import Exam from '../entities/Exam';
import { NewExam } from '../interfaces/newExam';

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

async function createExam(newExam: NewExam) {
    await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Exam)
        .values(newExam)
        .execute();
    return newExam;
}

export {
    getExamsByTeacher,
    getExamsBySubject,
    getAllExams,
    createExam,
};
