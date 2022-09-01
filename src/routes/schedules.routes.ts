import { Router } from 'express';
import schedulesCreateController from '../controllers/schedules/schedulesCreate.controller';
import schedulesPropertyListController from '../controllers/schedules/schedulesPropertyList.controller';
import authorizationMiddleware from '../middlewares/authorization.middleware';
import isAdmMiddleware from '../middlewares/isAdm.middleware';

const routes = Router();

const schedulesRoutes = () => {
  routes.post('', authorizationMiddleware, schedulesCreateController);
  routes.get(
    '/properties/:id',
    authorizationMiddleware,
    isAdmMiddleware,
    schedulesPropertyListController
  );

  return routes;
};

export default schedulesRoutes;
