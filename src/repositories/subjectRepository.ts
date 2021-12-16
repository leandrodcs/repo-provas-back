import { getRepository } from 'typeorm';
import Subject from '../entities/Subject';

async function listSubjects() {
    const subjects = await getRepository(Subject).find({
        select: ['name', 'id'],
        relations: ['period'],
    });

    return subjects;
}

export {
    listSubjects,
};
