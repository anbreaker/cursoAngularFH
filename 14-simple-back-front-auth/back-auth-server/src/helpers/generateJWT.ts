import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const generateJWT = (uid: string, name: string) => {
  const payload = { uid, name };

  return new Promise<string>((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED!,
      {
        expiresIn: '24h',
      },
      (error, token) => {
        if (error) {
          console.log(error);

          reject(error);
        } else {
          resolve(token!);
        }
      }
    );
  });
};
