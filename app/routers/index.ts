import express from 'express';
import IndicatorsRoutes from './indicators';

const apiRouter: express.Router = express.Router();

apiRouter.get('/', (req, res, next) => {
    res.send('API OK');
    next();
});

apiRouter.use('/indicators', IndicatorsRoutes);

export default apiRouter;
