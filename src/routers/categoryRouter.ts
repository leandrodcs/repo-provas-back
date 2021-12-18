import express from 'express';
import * as categoryController from '../controllers/categoryController';

const router = express.Router();

router.get('', categoryController.listCategories);

export default router;
