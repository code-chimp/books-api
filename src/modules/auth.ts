import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';

export const comparePasswords = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 5);
};

export const createJWT = ({ id, email, username, role }: User) => {
  const token = jwt.sign(
    {
      id,
      username,
      email,
      role,
    },
    process.env.JWT_SECRET as string,
  );

  return token;
};
