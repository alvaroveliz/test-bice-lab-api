import express from 'express';
import IndicatorController from '../../controllers/IndicatorController';
import asyncHandler from '../../helpers/asyncHandler';

const IndicatorsRoutes: express.Router = express.Router();

IndicatorsRoutes.get('/last', asyncHandler(IndicatorController.last));
IndicatorsRoutes.get('/:key/values', asyncHandler(IndicatorController.values));

export default IndicatorsRoutes;
