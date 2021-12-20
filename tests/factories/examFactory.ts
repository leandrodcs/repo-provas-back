import faker from 'faker';

function createFakeExam() {
    return {
        name: faker.name.firstName(),
        exam: faker.internet.url(),
        teacherId: faker.datatype.number({ min: 1, max: 10 }),
        categoryId: faker.datatype.number({ min: 1, max: 5 }),
        subjectId: faker.datatype.number({ min: 1, max: 13 }),
    };
}

export {
    createFakeExam,
};
