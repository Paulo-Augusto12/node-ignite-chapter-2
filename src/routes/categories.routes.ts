import { Router } from "express";
import { CategoriesRepository } from "../repositories/categoriesrepository/categoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();
const createCategoryService = new CreateCategoryService(categoriesRepository);

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;


  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepository.list();
  return response.json(allCategories);
});

export { categoriesRoutes };
