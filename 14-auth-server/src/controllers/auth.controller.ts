import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { User } from '../models/User.model';
import { generateJWT } from '../helpers/generateJWT';

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

    // Generate JWT
    const token = await generateJWT(dbUser.id, name);

    // Save user on Db
    await dbUser.save();

    // Respond
    res.json({
      ok: true,
      name,
      uid: dbUser.id,
      token,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ ok: false, message: 'Please, talk with admin.' });
  }
};

// /api/auth/new POST create user
export const postLoginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const dbUser = await User.findOne({ email });

    if (!dbUser) return res.status(400).json({ ok: false, msg: 'User not exists' });

    // Compare passwords
    const validPassword = bcrypt.compareSync(password, dbUser.password);

    if (!validPassword) {
      return res.status(400).json({ ok: false, msg: 'Password is not valid' });
    }

    // Generate JWT
    const token = await generateJWT(dbUser.id, dbUser.name);

    return res.json({
      ok: true,
      message: 'Login user',
      name: dbUser.name,
      uid: dbUser.id,
      token,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ ok: false, message: 'Please, talk with admin.' });
  }
};

// /api/auth/renew GET create user
export const getValidateToken = async (req: Request, res: Response) => {
  try {
    const { uid, name } = req;

    const token = await generateJWT(uid!, name!);

    return res.json({ ok: true, uid, name, token });
  } catch (error) {
    console.log(error);
  }
};
