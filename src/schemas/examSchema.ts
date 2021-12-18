import Joi from 'joi';
import { NewExam } from '../interfaces/newExam';

const validadeExam = (data: NewExam) => {
    const schema = Joi.object({
        name: Joi.string().min(1).required(),
        exam: Joi.string().uri().required(),
        teacherId: Joi.number().min(1).required(),
        categoryId: Joi.number().min(1).required(),
        subjectId: Joi.number().min(1).required(),

    }).unknown();
    if (schema.validate(data).error) {
        const { message } = schema.validate(data).error;
        if (message.includes('name')) return 'Insira um nome válido para a prova.';
        if (message.includes('exam')) return 'Insira um link de pdf válido.';
        if (message.includes('teacherId')) return 'Insira um professor válido.';
        if (message.includes('categoryId')) return 'Insira uma categoria válida.';
        if (message.includes('subjectId')) return 'Insira uma matéria válida.';
    }

    return false;
};

export {
    validadeExam,
};
