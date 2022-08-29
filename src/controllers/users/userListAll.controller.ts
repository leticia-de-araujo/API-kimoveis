import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import userListAllService from '../../services/users/userListAll.service';

const userListAllController = async (req: Request, res: Response) => {
  try {
    const users = await userListAllService();

    return res.status(200).json(instanceToPlain(users));
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.message, error.statusCode);
    }
  }
};

export default userListAllController;
