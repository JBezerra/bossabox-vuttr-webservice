import ICreateToolDTO from '../dtos/ICreateToolDTO';
import Tool from '../infra/typeorm/entities/Tool';

export default interface IToolsRepository {
  listAll(): Promise<Tool[]>;
  create(data: ICreateToolDTO): Promise<Tool>;
  delete(id: string): Promise<Tool | undefined>;
}
