import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';

const isAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdm } = req.user;

  if (isAdm === false) {
    throw new AppError('User is not admin.', 403);
  }
  
  console.log("isAdm middleware")

  next();
};

export default isAdmMiddleware;
