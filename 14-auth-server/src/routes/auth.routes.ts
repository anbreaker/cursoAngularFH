import { Router } from 'express';

import { greetingsMiddleware } from '../middlewares/greetingsMiddleware';
import { postCreateUser, loginUser, validateToken } from '../controllers/auth.controller';

const router = Router();

// /auth/new POST create user
router.post('/new', postCreateUser);

// /auth/  POST login user
router.post('/', loginUser);

// /auth/  GET validateToken
router.get('/renew', validateToken);

export default router;
