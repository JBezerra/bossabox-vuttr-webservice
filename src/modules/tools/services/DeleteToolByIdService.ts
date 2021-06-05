import { injectable, inject } from 'tsyringe';

import Tool from '../infra/typeorm/entities/Tool';
import IToolRepository from '../repositories/IToolsRepository';

interface IRequest {
  id: string;
}

@injectable()
export default class DeleteToolByIdService {
  private toolsRepository: IToolRepository;

  constructor(
    @inject('ToolsRepository')
    toolsRepository: IToolRepository,
  ) {
    this.toolsRepository = toolsRepository;
  }

  public async execute({ id }: IRequest): Promise<Tool | undefined> {
    const tool = this.toolsRepository.delete(id);
    return tool;
  }
}
