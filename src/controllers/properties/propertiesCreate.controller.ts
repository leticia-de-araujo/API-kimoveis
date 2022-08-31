import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { IPropertyRequest } from '../../interfaces/properties';
import propertiesCreateService from '../../services/properties/propertiesCreate.service';

const propertiesCreateController = async (req: Request, res: Response) => {
  try {
    const { value, size, address, categoryId }: IPropertyRequest = req.body;

    const property = await propertiesCreateService({
      value,
      size,
      address,
      categoryId,
    });

    return res.status(201).json(property);
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.message, error.statusCode);
    }
  }
};

export default propertiesCreateController;
