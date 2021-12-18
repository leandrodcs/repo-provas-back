import express from 'express';
import * as teacherController from '../controllers/teacherController';

const router = express.Router();

router.get('/:courseId', teacherController.listTeachers);

export default router;
