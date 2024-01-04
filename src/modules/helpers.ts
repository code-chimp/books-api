import { Request, Response } from 'express';

export const notImplementedHandler = (req: Request, res: Response) => {
  res.status(400).json({ message: 'not implemented' });
};
