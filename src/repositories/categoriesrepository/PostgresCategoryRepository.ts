import { Category } from "../../models/category";
import { ICategoriesRepository } from "./ICategoriesrepository";
import { ICreateCategoryDTO } from "./ICreateCategoryDTO";

export class PostgresCategoryRepository implements ICategoriesRepository {
  findByname(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }
}
