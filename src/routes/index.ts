import { Express } from 'express';
import categoriesRoutes from './categories.routes';
import loginRoute from './login.routes';
import userRoutes from './users.routes';

const appRoutes = (app: Express) => {
  app.use('/users', userRoutes());
  app.use('/login', loginRoute());
  app.use('/categories', categoriesRoutes());
};

export default appRoutes;
