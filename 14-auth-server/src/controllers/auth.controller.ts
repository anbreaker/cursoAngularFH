import { Request, Response } from 'express';

// /api/auth/new POST create user
export const postCreateUser = (req: Request, res: Response) => {
  try {
    return res.json({ ok: true, message: 'Create user' });
  } catch (error) {
    console.log(error);
  }
};

// /api/auth/new POST create user
export const loginUser = (req: Request, res: Response) => {
  try {
    return res.json({ ok: true, message: 'Login user' });
  } catch (error) {
    console.log(error);
  }
};

// /api/auth/renew GET create user
export const validateToken = (req: Request, res: Response) => {
  try {
    return res.json({ ok: true, message: 'validateToken user' });
  } catch (error) {
    console.log(error);
  }
};
