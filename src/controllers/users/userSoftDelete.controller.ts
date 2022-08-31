import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import userSoftDeleteService from '../../services/users/userSoftDelete.service';

const userSoftDeleteController = async (req: Request, res: Response) => {
  try {
    const idParams: string = req.params.id;

    await userSoftDeleteService(idParams);

    return res.status(204).send();
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.message, error.statusCode);
    }
  }
};

export default userSoftDeleteController;
