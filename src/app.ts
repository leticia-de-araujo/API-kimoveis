import 'reflect-metadata';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import { AppError, handleError } from './errors/appError';

const app = express();

app.use(express.json());

//app.use routes

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    handleError(err, res);
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
