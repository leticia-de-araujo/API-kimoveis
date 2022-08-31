import { Router } from 'express';
import propertiesCreateController from '../controllers/properties/propertiesCreate.controller';
import propertiesListAllController from '../controllers/properties/propertiesListAll.controller';
import authorizationMiddleware from '../middlewares/authorization.middleware';
import isAdmMiddleware from '../middlewares/isAdm.middleware';

const routes = Router();

const propertiesRoutes = () => {
  routes.post(
    '',
    authorizationMiddleware,
    isAdmMiddleware,
    propertiesCreateController
  );
  routes.get('', propertiesListAllController);

  return routes;
};

export default propertiesRoutes;
