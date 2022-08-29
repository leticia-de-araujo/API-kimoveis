import { hash } from 'bcrypt';
import AppDataSource from '../../data-source';
import { Users } from '../../entities/users.entity';
import { AppError } from '../../errors/AppError';
import { IUserRequest } from '../../interfaces/users';

const userCreateService = async ({
  name,
  email,
  password,
  isAdm,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(Users);

  const hashedPassword = await hash(password, 10);

  const users = await userRepository.find()

  const userAlreadyExists = users.find((user) => user.email === email)

  if (userAlreadyExists) {
    throw new AppError("User already exists", 400);
  }

  const user = userRepository.create({
    name,
    email,
    isAdm,
    password: hashedPassword,
  });

  await userRepository.save(user);

  return user;
};

export default userCreateService;
