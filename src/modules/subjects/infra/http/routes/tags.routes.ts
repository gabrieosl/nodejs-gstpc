import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import TagsController from '../controllers/TagsContoller';

const tagsRouter = Router();
const tagsController = new TagsController();
tagsRouter.use(ensureAuthenticated);

tagsRouter.get('/', tagsController.index);
// TODO observationsTypesRouter.use(Middleware to ensure is manager);
tagsRouter.post('/', tagsController.create);
tagsRouter.put('/:targetId', tagsController.update);
tagsRouter.delete('/:targetId', tagsController.delete);

export default tagsRouter;