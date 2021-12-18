import express from 'express';
import * as subjectController from '../controllers/subjectController';

const router = express.Router();

router.get('/:courseId', subjectController.listSubjects);
router.get('/:subjectId/teachers', subjectController.listSubjectTeachers);

export default router;
