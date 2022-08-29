import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';

// TODO arrumar middleware --> recebe isAdm depois do token

const isAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdm } = req.user;

  if (isAdm === false) {
    throw new AppError('Access denied. Must be an admin user.', 401);
  }

  next();
};

export default isAdmMiddleware;
