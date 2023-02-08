import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/specificationsRepository/SpecificationRepository";
import { specificationsController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  return specificationsController.handle(request, response);
});

export { specificationRoutes };
