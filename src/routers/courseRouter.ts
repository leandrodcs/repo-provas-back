import express from 'express';
import * as courseController from '../controllers/courseController';

const router = express.Router();

router.get('', courseController.listCourses);

export default router;
