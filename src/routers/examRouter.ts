import express from 'express';
import * as examController from '../controllers/examController';

const router = express.Router();

router.get('/:teacherId', examController.getExamsByTeacher);

export default router;
