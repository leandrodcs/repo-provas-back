import * as subjectRepository from '../repositories/subjectRepository';
import * as examRepository from '../repositories/examRepository';
import NotFoundError from '../errors/notFoundError';

async function listSubjects(courseId: number) {
    const result = await subjectRepository.listSubjects(courseId);

    if (!result.length) {
        throw new NotFoundError('Não existem matérias registradas nesse curso');
    }

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

    if (!result.length) {
        throw new NotFoundError('Não existe professores registrados nessa matéria');
    }

    return result;
}

export {
    listSubjects,
    listSubjectTeachers,
};
