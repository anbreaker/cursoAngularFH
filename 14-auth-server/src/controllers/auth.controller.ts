import { Request, Response } from 'express';

// /api/auth/new POST create user
export const postCreateUser = (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    console.log(name, email, password);

    return res.json({ ok: true, message: 'Create user' });
  } catch (error) {
    console.log(error);
  }
};

// /api/auth/new POST create user
export const postLoginUser = (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);

    return res.json({ ok: true, message: 'Login user' });
  } catch (error) {
    console.log(error);
  }
};

// /api/auth/renew GET create user
export const getValidateToken = (req: Request, res: Response) => {
  try {
    return res.json({ ok: true, message: 'validateToken user' });
  } catch (error) {
    console.log(error);
  }
};
