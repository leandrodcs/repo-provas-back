import * as subjectRepository from '../repositories/subjectRepository';
import * as examRepository from '../repositories/examRepository';

async function listSubjects(courseId: number) {
    const result = await subjectRepository.listSubjects(courseId);

    const exams = await examRepository.getAllExams();

    const hashExams: any = {};

    exams.forEach((exam) => {
        if (!hashExams[exam.subjectId]) {
            hashExams[exam.subjectId] = 1;
        } else {
            hashExams[exam.subjectId]++;
        }
    });

    return result.map((r) => ({
        ...r,
        examCount: hashExams[r.id] || 0,
    }));
}

async function listSubjectTeachers(subjectId: number) {
    const result = await subjectRepository.listSubjectTeachers(subjectId);

    return result;
}

export {
    listSubjects,
    listSubjectTeachers,
};
