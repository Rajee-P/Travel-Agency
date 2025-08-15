import express from 'express';
import {
  getDestinations,
  addMultipleDestinations,
  getDestinationById
} from '../controllers/Destination.controller.js';

const router = express.Router();

router.get('/get', getDestinations);
router.post('/add', addMultipleDestinations);
router.get('/:id', getDestinationById); // changed from slug to id

export default router;
