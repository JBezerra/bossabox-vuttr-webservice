import { v4 as uuid } from 'uuid';

import Tool from '@modules/tools/infra/typeorm/entities/Tool';
import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';
import IToolRepository from '../IToolsRepository';

export default class ToolsRepository implements IToolRepository {
  private tools: Tool[] = [];

  public async listAll(): Promise<Tool[]> {
    return this.tools;
  }

  public async create(data: ICreateToolDTO): Promise<Tool> {
    const tool = new Tool();
    Object.assign(tool, { id: uuid(), ...data });
    this.tools.push(tool);
    return tool;
  }

  public async findByTag(tag: string): Promise<Tool[] | undefined> {
    const tools = this.tools.filter(tool => {
      return tool.tags.includes(tag);
    });
    return tools;
  }

  public async delete(id: string): Promise<Tool | undefined> {
    const findIndex = this.tools.findIndex(tool => {
      return tool.id === id;
    });
    const tool = this.tools[findIndex];
    this.tools.splice(findIndex, 1);
    return tool;
  }
}
