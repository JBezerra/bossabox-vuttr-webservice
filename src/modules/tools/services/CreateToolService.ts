import { injectable, inject } from 'tsyringe';

import Tool from '../infra/typeorm/entities/Tool';
import IToolRepository from '../repositories/IToolsRepository';

interface IRequest {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

@injectable()
export default class CreateToolService {
  private toolsRepository: IToolRepository;

  constructor(
    @inject('ToolsRepository')
    toolsRepository: IToolRepository,
  ) {
    this.toolsRepository = toolsRepository;
  }

  public async execute({
    title,
    link,
    description,
    tags,
  }: IRequest): Promise<Tool> {
    const tools = this.toolsRepository.create({
      title,
      link,
      description,
      tags,
    });
    return tools;
  }
}
