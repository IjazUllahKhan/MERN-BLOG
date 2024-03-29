import {Router} from 'express';
import { test, updateUser ,deleteUser} from '../contollers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = Router();

router.get('/test', test);
router.put('/update/:userId', verifyToken,updateUser);
router.delete('/delete/:userId', verifyToken,deleteUser);

export default router;