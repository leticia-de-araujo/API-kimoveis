import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { IUserLogin } from '../../interfaces/users';
import loginService from '../../services/login/login.service';

const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password }: IUserLogin = req.body;

    const token = await loginService({ email, password });

    return res.status(200).send({ token });
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.message, error.statusCode);
    }
  }
};

export default loginController;
