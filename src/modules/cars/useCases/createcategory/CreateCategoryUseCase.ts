import { ICategoriesRepository } from "../../categoriesrepository/abstractions/ICategoriesrepository";
interface Irequest {
  name: string;
  description: string;
}
class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ description, name }: Irequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByname(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
