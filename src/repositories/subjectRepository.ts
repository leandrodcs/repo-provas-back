import { getRepository } from 'typeorm';
import Course from '../entities/Course';

async function listSubjects(courseId: number) {
    const result = await getRepository(Course).find({
        relations: ['subjects'],
        where: { id: courseId },
    });

    const subjects = result.map((subject) => subject.getSubjects());

    return subjects[0];
}

export {
    listSubjects,
};
