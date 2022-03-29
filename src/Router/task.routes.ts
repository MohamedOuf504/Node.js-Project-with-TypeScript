import { Router } from 'express';
import addDate from '../controllers/task.Controller';

const usersRouter = Router();

usersRouter.post('/' , addDate )

export default usersRouter;