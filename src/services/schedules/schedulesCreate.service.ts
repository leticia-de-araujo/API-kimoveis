import AppDataSource from '../../data-source';
import { Properties } from '../../entities/properties.entity';
import { Schedules } from '../../entities/schedules.entity';
import { Users } from '../../entities/users.entity';
import { AppError } from '../../errors/AppError';
import { IScheduleRequest } from '../../interfaces/schedules';

const schedulesCreateService = async ({
  userId,
  propertyId,
  date,
  hour,
}: IScheduleRequest) => {
  const schedulesRepository = AppDataSource.getRepository(Schedules);
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const usersRepository = AppDataSource.getRepository(Users);

  const schedules = await schedulesRepository.find();
  const properties = await propertiesRepository.find();
  const users = await usersRepository.find();

  const user = users.find((user) => user.id === userId);

  const property = properties.find((property) => property.id === propertyId);

  if (!property) {
    throw new AppError('Property not found.', 404);
  }

  const dateArray = date.split('/');

  let dateDatabase: string;

  if (dateArray[1].length === 1) {
    dateDatabase = `${dateArray[0]}-0${dateArray[1]}-${dateArray[2]}`;
  } else {
    dateDatabase = date.split('/').join('-');
  }

  const scheduleAlreadyExists = schedules.find(
    (schedule) => schedule.date === dateDatabase && schedule.hour === hour
  );

  if (scheduleAlreadyExists) {
    throw new AppError('Schedule already exists.', 400);
  }

  const validateHour = Number(hour.split(':')[0]);
  const validateMinutes = Number(hour.split(':')[1]);

  if (
    validateHour < 8 ||
    validateHour > 18 ||
    (validateHour === 18 && validateMinutes > 0)
  ) {
    throw new AppError('Invalid hour.', 400);
  }

  const checkDate = new Date(date);

  const validateDay = checkDate.toString().split(' ')[0];

  if (validateDay === 'Sat' || validateDay === 'Sun') {
    throw new AppError('Invalid date.', 400);
  }

  const newSchedule = schedulesRepository.create({
    date: dateDatabase,
    hour,
    property: property,
    user: user,
  });

  await schedulesRepository.save(newSchedule);

  return { message: 'Schedule created.' };
};

export default schedulesCreateService;
