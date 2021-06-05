import { getRepository, Repository } from 'typeorm';

import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';
import IToolRepository from '@modules/tools/repositories/IToolRepository';
import Tool from '../entities/Tool';

export default class ToolsRepository implements IToolRepository {
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

  public async delete(id: string): Promise<Tool | undefined> {
    const tool = this.ormRepository.findOne({ where: { id } });
    this.ormRepository.delete(id);
    return tool;
  }
}
