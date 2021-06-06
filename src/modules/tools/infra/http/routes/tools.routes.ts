import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthticated from '@modules/users/infra/http/middlewares/ensureAuthticated';
import ToolsController from '../controllers/ToolsController';

const toolsRouter = Router();
const toolsController = new ToolsController();

toolsRouter.use(ensureAuthticated);

toolsRouter.get('/', toolsController.index);
toolsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      link: Joi.string().required(),
      description: Joi.string().required(),
      tags: Joi.array().items(Joi.string()).required(),
    },
  }),
  toolsController.create,
);

toolsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  toolsController.destroy,
);

export default toolsRouter;
