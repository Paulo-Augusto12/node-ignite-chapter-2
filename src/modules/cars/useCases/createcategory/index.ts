import { CategoriesRepository } from "../../categoriesrepository/categoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoryRepository = CategoriesRepository.getInstance();
const createCategoryuseCase = new CreateCategoryUseCase(categoryRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryuseCase
);

export { createCategoryController };
