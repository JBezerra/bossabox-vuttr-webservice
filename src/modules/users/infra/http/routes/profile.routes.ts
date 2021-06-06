import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';

import ensureAuthticated from '../middlewares/ensureAuthticated';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(ensureAuthticated);
profileRouter.get('/', profileController.show);

export default profileRouter;
