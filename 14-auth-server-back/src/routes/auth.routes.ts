import { Router } from 'express';
import { check } from 'express-validator';

import { validateFields } from '../middlewares/validateFields';
import { validateJWT } from '../middlewares/validateJWT';
import {
  postCreateUser,
  postLoginUser,
  getValidateToken,
} from '../controllers/auth.controller';

const router = Router();

// /auth/new POST create user
router.post(
  '/new',
  [
    check('name', 'User name is required').notEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be 3 characters').isLength({ min: 3 }),
    validateFields,
  ],
  postCreateUser
);

// /auth/  POST login user
router.post(
  '/',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be 3 characters').isLength({ min: 3 }),
    validateFields,
  ],
  postLoginUser
);

// /auth/  GET validateToken
router.get('/renew', validateJWT, getValidateToken);

export default router;
