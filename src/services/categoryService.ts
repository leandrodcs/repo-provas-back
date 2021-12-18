import * as categoryRepository from '../repositories/categoryRepository';

async function listCategories() {
    const result = await categoryRepository.listCategories();

    return result;
}

export {
    listCategories,
};
