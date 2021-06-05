import { getRepository, Raw, Repository } from 'typeorm';

import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';
import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import Tool from '../entities/Tool';

export default class ToolsRepository implements IToolsRepository {
  private ormRepository: Repository<Tool>;

  constructor() {
    this.ormRepository = getRepository(Tool);
  }

  public async listAll(): Promise<Tool[]> {
    const tools = this.ormRepository.find();
    return tools;
  }

  public async create({
    title,
    description,
    link,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = this.ormRepository.create({
      title,
      description,
      link,
      tags,
    });
    this.ormRepository.save(tool);
    return tool;
  }

  public async findByTag(tag: string): Promise<Tool[] | undefined> {
    const tools = this.ormRepository.find({
      tags: Raw(alias => `${alias} IN (:...titles)`, {
        tags: [tag],
      }),
    });
    return tools;
  }

  public async delete(id: string): Promise<Tool | undefined> {
    const tool = this.ormRepository.findOne({ where: { id } });
    this.ormRepository.delete(id);
    return tool;
  }
}
