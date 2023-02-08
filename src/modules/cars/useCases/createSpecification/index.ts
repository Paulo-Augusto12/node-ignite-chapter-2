import { SpecificationsRepository } from "../../specificationsRepository/SpecificationRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./createSpecificationController";

const specificationsRepository = SpecificationsRepository.getInstance();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);
const specificationsController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { specificationsController };
