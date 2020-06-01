import IndicatorsService from '../indicators';

const service = new IndicatorsService();

test('service is showing last data', async () => {
    const data = await service.getLast();
    expect(data).toBe('peanut butter');
});
