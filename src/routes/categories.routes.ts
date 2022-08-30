import { Router } from 'express';
import categoryCreateController from '../controllers/categories/categoryCreate.controller';
import categoryListAllController from '../controllers/categories/categoryListAll.controller';
import categoryListPropertiesController from '../controllers/categories/categoryListProperties.controller';
import authorizationMiddleware from '../middlewares/authorization.middleware';
import isAdmMiddleware from '../middlewares/isAdm.middleware';

const routes = Router();

const categoriesRoutes = () => {
  routes.post(
    '',
    authorizationMiddleware,
    isAdmMiddleware,
    categoryCreateController
  );
  routes.get('', categoryListAllController);
  routes.get('/:id/properties', categoryListPropertiesController);

  return routes;
};

export default categoriesRoutes;
