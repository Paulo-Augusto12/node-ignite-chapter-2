import { ICategoriesRepository } from "../../categoriesrepository/abstractions/ICategoriesrepository";
import { Category } from "../../models/category";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
