import { Request, Response, NextFunction } from 'express';
import IndicatorsService from '../services/indicators';

const indicatorsService = new IndicatorsService();

const IndicatorController = {
    last: async (req: Request, res: Response, next: NextFunction) => {
        const last = await indicatorsService.getLast();
        res.send(last);
        next();
    },
    values: async (req: Request, res: Response, next: NextFunction) => {
        const indicator = await indicatorsService.getValuesByKey(req.params.key);
        let arrayValues: {}[] = [];
        const sortedKeys = Object.keys(indicator.values);
        sortedKeys.forEach((key) => {
            arrayValues.push({ date: key, value: indicator.values[key] });
        });

        indicator.values = arrayValues;

        res.send(indicator);
        next();
    },
};

export default IndicatorController;
