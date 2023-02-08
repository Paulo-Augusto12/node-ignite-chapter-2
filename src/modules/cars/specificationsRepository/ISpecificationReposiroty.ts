import { Specification } from "../models/specification";
import { ICreateSpecificationDTO } from "./dto/ISpecificationRepositoryDTO";

export interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByname(name: string): Specification
}
