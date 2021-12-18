import express from 'express';
import * as examController from '../controllers/examController';

const router = express.Router();

router.get('/teacher/:teacherId', examController.getExamsByTeacher);
router.get('/subject/:subjectId', examController.getExamsBySubject);
router.post('', examController.createExam);

export default router;
