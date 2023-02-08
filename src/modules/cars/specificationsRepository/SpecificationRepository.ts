import { Specification } from "../models/specification";
import { ISpecificationsRepository } from "./ISpecificationReposiroty";
import { ICreateSpecificationDTO } from "./dto/ISpecificationRepositoryDTO";

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByname(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    return specification;
  }
}
