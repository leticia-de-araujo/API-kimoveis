import { Router } from 'express';
import userCreateController from '../controllers/users/userCreate.controller';
import userListAllController from '../controllers/users/userListAll.controller';
import authorizationMiddleware from '../middlewares/authorization.middleware';
import isAdmMiddleware from '../middlewares/isAdm.middleware';

const routes = Router();

const userRoutes = () => {
  routes.post('', userCreateController);
  routes.get(
    '',
    authorizationMiddleware,
    isAdmMiddleware,
    userListAllController
  );

  return routes;
};

export default userRoutes;
