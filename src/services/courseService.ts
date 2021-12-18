import * as courseRepository from '../repositories/courseRepository';

async function listCourses() {
    const result = await courseRepository.listCourses();

    return result;
}

export {
    listCourses,
};
