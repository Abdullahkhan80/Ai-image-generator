import express from 'express';
import {registerUser, loginUser, userCredits} from '../controller/userController.js';
import userAuth from '../middlewares/auth.js';
const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/credits',userAuth , userCredits);

export default router;