import NotFoundError from '../errors/notFoundError';
import * as categoryRepository from '../repositories/categoryRepository';

async function listCategories() {
    const result = await categoryRepository.listCategories();

    if (!result.length) {
        throw new NotFoundError('Não existem categorias registradas');
    }

    return result;
}

export {
    listCategories,
};
