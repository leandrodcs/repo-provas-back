import * as subjectRepository from '../repositories/subjectRepository';

async function listSubjects(courseId: number) {
    const subjects = await subjectRepository.listSubjects(courseId);

    return subjects;
}

export {
    listSubjects,
};
