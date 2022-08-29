import { compare } from 'bcrypt';
import AppDataSource from '../../data-source';
import { Users } from '../../entities/users.entity';
import { AppError } from '../../errors/AppError';
import { IUserLogin } from '../../interfaces/users';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const loginService = async ({ email, password }: IUserLogin) => {
  const usersRepository = AppDataSource.getRepository(Users);

  const users = await usersRepository.find();

  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new AppError('Invalid credentials.', 403);
  }

  if (!user.isActive) {
    throw new AppError('User is not active.', 400);
  }

  const matchPassword = await compare(password, user.password);

  if (!matchPassword) {
    throw new AppError('Invalid credentials.', 403);
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY as string,
    {
      subject: user.id,
      expiresIn: '2h',
    }
  );

  return token;
};

export default loginService;
