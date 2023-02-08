import { ICategoriesRepository } from "../repositories/categoriesrepository/ICategoriesrepository";
interface Irequest {
  name: string;
  description: string;
}
class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ description, name }: Irequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByname(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
