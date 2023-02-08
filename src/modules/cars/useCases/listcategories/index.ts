import { CategoriesRepository } from "../../categoriesrepository/categoriesRepository";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";
import { ListcategoriesController } from "./listcategoriesControler";

const categoriesrepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesrepository);
const listCategoriescontroller = new ListcategoriesController(
  listCategoriesUseCase
);

export { listCategoriescontroller };
