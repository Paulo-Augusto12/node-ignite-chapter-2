import { ISpecificationsRepository } from "../../specificationsRepository/ISpecificationReposiroty";

interface IRequest {
  name: string;
  description: string;
}
export class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      this.specificationsRepository.findByname(name);

    if (specificationAlreadyExists) {
      throw new Error("especification already exists");
    }
    this.specificationsRepository.create({ name, description });
  }
}
