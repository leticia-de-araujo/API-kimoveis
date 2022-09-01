import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import schedulesCreateService from '../../services/schedules/schedulesCreate.service';

const schedulesCreateController = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;

    const { propertyId, date, hour } = req.body;

    const schedule = await schedulesCreateService({
      userId,
      propertyId,
      date,
      hour,
    });

    return res.status(201).json(schedule);
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.message, error.statusCode);
    }
  }
};

export default schedulesCreateController;
