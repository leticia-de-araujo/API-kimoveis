import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { ICategoryRequest } from '../../interfaces/categories';
import categoryCreateService from '../../services/categories/categoryCreate.service';


const categoryCreateController = async (req: Request, res: Response) => {
  try {



    const { name }: ICategoryRequest = req.body;



    const category = await categoryCreateService(name);


    
    return res.status(201).json(category);
  } catch (error) {
    if (error instanceof AppError) {


      
      throw new AppError(error.message, error.statusCode);
    }
  }
};

export default categoryCreateController;
