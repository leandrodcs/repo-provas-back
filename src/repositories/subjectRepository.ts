import { getRepository } from 'typeorm';
import Subject from '../entities/Subject';
import Course from '../entities/Course';

async function listSubjects(courseId: number) {
    const result = await getRepository(Course).find({
        relations: ['subjects'],
        where: { id: courseId },
    });

    if (!result.length) return [];

    const subjects = result.map((subject) => subject.getSubjects());

    return subjects[0];
}

async function listSubjectTeachers(subjectId: number) {
    const result = await getRepository(Subject).find({
        relations: ['teachers'],
        where: { id: subjectId },
    });

    return result[0].teachers;
}

export {
    listSubjects,
    listSubjectTeachers,
};
