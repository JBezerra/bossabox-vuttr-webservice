import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListToolsService from '@modules/tools/services/ListToolsService';
import CreateToolService from '@modules/tools/services/CreateToolService';
import FindToolsByTagService from '@modules/tools/services/FindToolsByTagService';
import DeleteToolByIdService from '@modules/tools/services/DeleteToolByIdService';
import Tool from '../../typeorm/entities/Tool';

export default class ToolsController {
  public async index(request: Request, response: Response): Promise<Response> {
    let { tag } = request.query;
    tag = tag as string;
    let tools: Tool[] | undefined;

    if (tag) {
      const findToolsByTag = container.resolve(FindToolsByTagService);
      tools = await findToolsByTag.execute({ tag });
    } else {
      const listTools = container.resolve(ListToolsService);
      tools = await listTools.execute();
    }

    return response.status(200).json(tools);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { title, link, description, tags } = request.body;
    const createTool = container.resolve(CreateToolService);
    const tool = await createTool.execute({ title, link, description, tags });
    return response.status(201).json(tool);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    let { tag } = request.query;
    tag = String(tag);
    const findToolsByTag = container.resolve(FindToolsByTagService);
    const tools = await findToolsByTag.execute({ tag });
    return response.status(200).json(tools);
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const deleteToolById = container.resolve(DeleteToolByIdService);
    await deleteToolById.execute({ id });
    return response.status(204).send();
  }
}
