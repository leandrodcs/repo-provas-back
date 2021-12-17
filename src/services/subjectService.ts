import * as subjectRepository from '../repositories/subjectRepository';
import * as examRepository from '../repositories/examRepository';

async function listSubjects(courseId: number) {
    const result = await subjectRepository.listSubjects(courseId);

    const exams = await examRepository.getAllExams();
    const subjects = [];

    for (let i = 0; i < result.length; i++) {
        subjects.push({
            ...result[i],
            examCount: exams.filter((exam) => exam.subjectId === result[i].id).length,
        });
    }

    return subjects;
}

export {
    listSubjects,
};
