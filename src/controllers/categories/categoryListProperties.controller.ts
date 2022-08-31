import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import categoryListPropertiesService from '../../services/categories/categoryListProperties.service';

const categoryListPropertiesController = async (
  req: Request,
  res: Response
) => {
  try {
    const categoryId = req.params.id;

    console.log(categoryId)

    const categoryProperties = await categoryListPropertiesService(categoryId);

    console.log("try controller")

    return res.status(200).json(categoryProperties);
  } catch (error) {
    if (error instanceof AppError) {
      console.log("catch controller")
      throw new AppError(error.message, error.statusCode);
    }
  }
};

export default categoryListPropertiesController;
