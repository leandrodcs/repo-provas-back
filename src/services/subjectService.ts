import * as subjectRepository from '../repositories/subjectRepository';

async function listSubjects() {
    const subjects = await subjectRepository.listSubjects();

    return subjects;
}

export {
    listSubjects,
};
