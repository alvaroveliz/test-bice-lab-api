import config from 'config';
import fetch from 'node-fetch';

const services: any = config.get('services');
const requestUrl: string = `${services.indecon.endpoint}`;

class IndicatorsService {
    public async getLast() {
        const lastValuesUrl = `${requestUrl}/last`;
        const result = await fetch(lastValuesUrl);
        const lastValues = await result.json();

        return lastValues;
    }

    public async getValuesByKey(key: string) {
        const valuesUrl = `${requestUrl}/values/${key}`;
        const result = await fetch(valuesUrl);
        const values = await result.json();

        return values;
    }
}

export default IndicatorsService;
