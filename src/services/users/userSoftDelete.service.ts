import AppDataSource from '../../data-source';
import { Users } from '../../entities/users.entity';
import { AppError } from '../../errors/AppError';

const userSoftDeleteService = async (idParams: string) => {
  const usersRepository = AppDataSource.getRepository(Users);

  const users = await usersRepository.find();

  const user = users.find((user) => user.id === idParams);

  if (!user) {
    throw new AppError('User not found.', 404);
  }

  if (!user.isActive) {
    throw new AppError('Inactive user.', 400);
  }

  await usersRepository.update(user.id, { isActive: false });

  return;
};

export default userSoftDeleteService;
