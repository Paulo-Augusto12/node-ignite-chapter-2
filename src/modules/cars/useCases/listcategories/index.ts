import { CategoriesRepository } from "../../categoriesrepository/categoriesRepository";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";
import { ListcategoriesController } from "./listcategoriesControler";

const categoriesrepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesrepository);
const listCategoriescontroller = new ListcategoriesController(
  listCategoriesUseCase
);

export { listCategoriescontroller };
