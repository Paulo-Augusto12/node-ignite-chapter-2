import { Category } from "../../models/category";
import { ICreateCategoryDTO } from "./ICreateCategoryDTO";
export interface ICategoriesrepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}
