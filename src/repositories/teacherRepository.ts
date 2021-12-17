import { getRepository } from 'typeorm';
import Course from '../entities/Course';

async function listTeachers(courseId: number) {
    const result = await getRepository(Course).find({
        relations: ['teachers'],
        where: { id: courseId },
    });

    if (!result.length) return [];

    const teachers = result.map((teacher) => teacher.getTeachers());

    return teachers[0];
}

export {
    listTeachers,
};
