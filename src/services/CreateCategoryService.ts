import { CategoriesRepository } from "../repositories/categoriesrepository/categoriesRepository";

interface Irequest {
  name: string;
  description: string;
}
class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ description, name }: Irequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findbyname(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
