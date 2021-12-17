import { getRepository } from 'typeorm';
import Exam from '../entities/Exam';

async function getExamsByTeacher(teacherId: number) {
    const result = await getRepository(Exam).find({
        relations: ['teacher'],
        where: { teacherId },
    });

    return result;
}

export {
    getExamsByTeacher,
};
