import AppDataSource from '../../data-source';
import { Categories } from '../../entities/categories.entity';
import { AppError } from '../../errors/AppError';

const categoryCreateService = async (name: string) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const categories = await categoriesRepository.find();

  const categoryAlreadyExists = categories.find(
    (category) => category.name === name
  );

  if (categoryAlreadyExists) {
    throw new AppError('Category already exists.', 400);
  }

  const newCategory = categoriesRepository.create({
    name,
  });

  await categoriesRepository.save(newCategory);

  return newCategory;
};

export default categoryCreateService;
