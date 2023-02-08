import { Category } from "../../models/category";
import { ICreateCategoryDTO } from "../dto/ICreateCategoryDTO";

export interface ICategoriesRepository {
  findByname(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}
