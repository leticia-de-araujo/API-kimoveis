import AppDataSource from '../../data-source';
import { Categories } from '../../entities/categories.entity';
import { AppError } from '../../errors/AppError';

const categoryListPropertiesService = async (categoryId: string) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const categoryProperties = await categoriesRepository.findOne({
    where: {
      id: categoryId,
    },
    relations: {
      properties: true,
    },
  });

  if (!categoryProperties) {
    throw new AppError('Category not found.', 404);
  }

  return categoryProperties;
};

export default categoryListPropertiesService;
