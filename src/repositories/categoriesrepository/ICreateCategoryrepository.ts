import { Category } from "../../models/category";

export interface ICategoriesrepositry {
  findByName(name: string): Category;
  list(): Category[];
  create(name: string, description: string): void;
}
