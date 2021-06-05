import { injectable, inject } from 'tsyringe';

import Tool from '../infra/typeorm/entities/Tool';
import IToolRepository from '../repositories/IToolsRepository';

@injectable()
export default class ListToolsService {
  private toolsRepository: IToolRepository;

  constructor(
    @inject('ToolsRepository')
    toolsRepository: IToolRepository,
  ) {
    this.toolsRepository = toolsRepository;
  }

  public async execute(): Promise<Tool[]> {
    const tools = this.toolsRepository.listAll();
    return tools;
  }
}
