import { getRepository } from 'typeorm';

import Exam from '../../src/entities/Exam';

export async function clearDatabase() {
    await getRepository(Exam).delete({});
}
