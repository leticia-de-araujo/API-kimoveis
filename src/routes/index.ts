import { Express } from 'express';
import loginRoute from './login.routes';
import userRoutes from './users.routes';

const appRoutes = (app: Express) => {
  app.use('/users', userRoutes());
  app.use('/login', loginRoute());
};

export default appRoutes;
