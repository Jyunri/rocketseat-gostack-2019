import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

import multerConfig from './config/multer';
import User from './app/models/User';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/users', async (req, res) => {
  res.json(await User.findAll());
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
