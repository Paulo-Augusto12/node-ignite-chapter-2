import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/categoriesrepository/categoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createcategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepository.list();
  return response.json(allCategories);
});

export { categoriesRoutes };
