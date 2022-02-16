import NotFoundError from '../errors/notFoundError';
import * as courseRepository from '../repositories/courseRepository';

async function listCourses() {
    const result = await courseRepository.listCourses();

    if (!result.length) {
        throw new NotFoundError('Não existem cursos registrados');
    }

    return result;
}

export {
    listCourses,
};
