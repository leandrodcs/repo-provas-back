import { getRepository } from 'typeorm';
import Category from '../entities/Category';

async function listCategories() {
    const result = await getRepository(Category).find();

    if (!result.length) return [];

    return result;
}

export {
    listCategories,
};
