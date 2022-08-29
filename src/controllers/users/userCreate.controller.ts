import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { IUserRequest } from '../../interfaces/users';
import userCreateService from '../../services/users/userCreate.service';

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, isAdm }: IUserRequest = req.body;

    const newUser = await userCreateService({
      name,
      email,
      password,
      isAdm,
    });

    return res.status(201).json(instanceToPlain(newUser));
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.message, error.statusCode);
    }
  }
};

export default userCreateController;
