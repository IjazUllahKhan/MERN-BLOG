import {Router } from "express";
import {test} from '../contollers/user.controller.js'

const router  = Router();

router.get('/test',test)

export default router;