import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListToolsService from '@modules/tools/services/ListToolsService';

export default class ToolsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listTools = container.resolve(ListToolsService);
    const tools = await listTools.execute();
    return response.json(tools);
  }
}
