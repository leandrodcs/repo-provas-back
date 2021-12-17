import express from 'express';
import * as examController from '../controllers/examController';

const router = express.Router();

router.get('', examController.getExamsByTeacher);

export default router;
