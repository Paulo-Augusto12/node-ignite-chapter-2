import { Router } from "express";
import { CategoriesRepository } from "../repositories/categoriesrepository/categoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findbyname(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: "category already exists" });
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepository.list();
  return response.json(allCategories);
});

export { categoriesRoutes };
