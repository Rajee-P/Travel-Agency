import express from "express";
import { createUser,getUsers,login,getUserById,updateUser,deleteUser } from '../controllers/User.controller.js';

const router = express.Router();

router.post('/login', login);
router.get('/getusers', getUsers);
router.post('/signup', createUser);

export default router;