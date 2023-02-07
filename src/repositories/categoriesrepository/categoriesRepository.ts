import { Category } from "../../models/category";

import { ICreateCategoryDTO } from "./ICreateCategoryDTO";

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findbyname(name: string): Category {
    const category = this.categories.find(category => category.name === name)

    return category
  }
}

export { CategoriesRepository };
