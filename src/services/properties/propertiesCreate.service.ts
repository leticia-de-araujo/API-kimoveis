import AppDataSource from '../../data-source';
import { Addresses } from '../../entities/addresses.entity';
import { Categories } from '../../entities/categories.entity';
import { Properties } from '../../entities/properties.entity';
import { AppError } from '../../errors/AppError';
import { IPropertyRequest } from '../../interfaces/properties';

const propertiesCreateService = async ({
  value,
  size,
  address,
  categoryId,
}: IPropertyRequest) => {
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const addressesRepository = AppDataSource.getRepository(Addresses);
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const properties = await propertiesRepository.find();
  const categories = await categoriesRepository.find();

  const propertyALreadyExists = properties.find(
    (property) =>
      property.address.zipCode === address.zipCode &&
      property.address.number === address.number
  );

  if (propertyALreadyExists) {
    throw new AppError('Address already exists.', 400);
  }

  const selectedCategory = categories.find(
    (category) => category.id === categoryId
  );

  if (!selectedCategory) {
    throw new AppError('Category not found.', 404);
  }

  if (address.state.length > 2) {
    throw new AppError('Invalid state.', 400);
  }

  if (address.zipCode.length > 8) {
    throw new AppError('Invalid zip code.', 400);
  }

  const newAddress = addressesRepository.create({
    district: address.district,
    zipCode: address.zipCode,
    number: address.number,
    city: address.city,
    state: address.state,
  });

  await addressesRepository.save(newAddress);

  const newProperty = propertiesRepository.create({
    value,
    size,
    address: newAddress,
    category: selectedCategory,
  });

  await propertiesRepository.save(newProperty);

  return newProperty;
};

export default propertiesCreateService;
