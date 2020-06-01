import IndicatorsService from '../indicators';

const service = new IndicatorsService();

test('service is showing the indicators', async () => {
    const expectedKeys = ['cobre', 'dolar', 'euro', 'ipc', 'ivp', 'oro', 'plata', 'uf', 'utm', 'yen'];
    const data = await service.getLast();
    const keys = Object.keys(data);
    expect(keys).toEqual(expectedKeys);
});

test('service is showing correct structure for "cobre"', async () => {
    const testKey = 'cobre';
    const expectedKeys = ['key', 'name', 'unit', 'values'];
    const data = await service.getValuesByKey(testKey);
    const keys = Object.keys(data);
    expect(keys).toEqual(expectedKeys);
});
