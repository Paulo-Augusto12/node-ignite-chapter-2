import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./listCategoriesUseCase";

class ListcategoriesController {
  constructor(private listcategoriesUseCase: ListCategoriesUseCase) {}
  handle(request: Request, response: Response): Response {
    const allCategories = this.listcategoriesUseCase.execute();
    return response.json(allCategories);
  }
}

export { ListcategoriesController };
