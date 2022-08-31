import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import propertiesListAllService from '../../services/properties/propertiesListAll.service';

const propertiesListAllController = async (req: Request, res: Response) => {
  try {
    const properties = await propertiesListAllService();

    return res.status(200).json(properties);
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.message, error.statusCode);
    }
  }
};

export default propertiesListAllController;
