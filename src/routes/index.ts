import { Express } from 'express';
import categoriesRoutes from './categories.routes';
import loginRoute from './login.routes';
import propertiesRoutes from './properties.routes';
import schedulesRoutes from './schedules.routes';
import userRoutes from './users.routes';

const appRoutes = (app: Express) => {
  app.use('/users', userRoutes());
  app.use('/login', loginRoute());
  app.use('/categories', categoriesRoutes());
  app.use('/properties', propertiesRoutes());
  app.use('/schedules', schedulesRoutes());
};

export default appRoutes;
