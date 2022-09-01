import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import schedulesPropertyListService from '../../services/schedules/schedulesPropertyList.service';

const schedulesPropertyListController = async (req: Request, res: Response) => {
  try {
    const propertyId = req.params.id;

    const schedules = await schedulesPropertyListService(propertyId);

    return res.status(200).json(schedules);
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.message, error.statusCode);
    }
  }
};

export default schedulesPropertyListController;
