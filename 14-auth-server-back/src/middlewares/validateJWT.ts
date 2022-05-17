import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

interface JwtPayload {
  uid: string;
  name: string;
}

export const validateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({ ok: false, msg: 'Unauthorized, token is invalid.' });
  }

  try {
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED!) as JwtPayload;

    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({ ok: false, message: 'Token is invalid.' });
  }

  next();
};
