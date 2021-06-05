import { injectable, inject } from 'tsyringe';

import Tool from '../infra/typeorm/entities/Tool';
import IToolRepository from '../repositories/IToolsRepository';

interface IRequest {
  tag: string;
}

@injectable()
export default class FindToolsByTagService {
  private toolsRepository: IToolRepository;

  constructor(
    @inject('ToolsRepository')
    toolsRepository: IToolRepository,
  ) {
    this.toolsRepository = toolsRepository;
  }

  public async execute({ tag }: IRequest): Promise<Tool[] | undefined> {
    const tools = this.toolsRepository.findByTag(tag);
    return tools;
  }
}
