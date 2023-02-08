import { Category } from "../../cars/models/category";
import { ICategoriesRepository } from "./abstractions/ICategoriesrepository";
import { ICreateCategoryDTO } from "./dto/ICreateCategoryDTO";

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
