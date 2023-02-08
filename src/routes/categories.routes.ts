import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/categoriesrepository/categoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createcategory";
import { listCategoriescontroller } from "../modules/cars/useCases/listcategories";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriescontroller.handle(request, response);
});

export { categoriesRoutes };
