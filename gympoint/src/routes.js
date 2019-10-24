import { Router } from 'express';

const routes = new Router();

routes.get('/teste', (req, res) => res.json({ messge: 'bla' }));

export default routes;
