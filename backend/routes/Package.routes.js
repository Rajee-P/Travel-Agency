import express from 'express';
import {getPackages,getPackageById,addMultiplePackages} from '../controllers/Package.controller.js';

const router = express.Router();

router.get('/get', getPackages);
router.get('/:id', getPackageById);
router.post('/add', addMultiplePackages);

export default router;