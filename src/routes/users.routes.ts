import { Router } from 'express';
import userCreateController from '../controllers/users/userCreate.controller';
import userListAllController from '../controllers/users/userListAll.controller';
import userSoftDeleteController from '../controllers/users/userSoftDelete.controller';
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
  routes.delete(
    '/:id',
    authorizationMiddleware,
    isAdmMiddleware,
    userSoftDeleteController
  );

  return routes;
};

export default userRoutes;
