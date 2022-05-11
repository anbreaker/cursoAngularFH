import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { User } from '../models/User.model';

// /api/auth/new POST create user
export const postCreateUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    // veryify if email already exists
    const user = await User.findOne({ email });

    if (user) return res.status(400).json({ ok: false, msg: 'User already exists' });

    // create new user with model
    const dbUser = new User(req.body);

    // Hash password on model mongoose middlewares
    // const salt = bcrypt.genSaltSync(10);
    // dbUser.password = bcrypt.hashSync(password, salt);

    // Create JWT

    // Save user on Db
    await dbUser.save();

    // Respond
    res.json({
      ok: true,
      uid: dbUser.id,
      name,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ ok: false, message: 'Please, talk with admin.' });
  }
};

// /api/auth/new POST create user
export const postLoginUser = (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

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
