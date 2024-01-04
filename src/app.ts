import express, { Express, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';

import apiRouter from './router';

const app: Express = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

// naive error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);

  switch ((err as any).type) {
    case 'auth':
      res.status(401).json({ message: 'not authorized' });
      break;

    case 'input':
      res.status(400).json({ message: 'bad input' });
      break;

    default:
      res.status(500).json({ message: 'something went wrong' });
  }
});

export default app;
