import { getWeatherData } from './weatherServices';

describe('weatherServices', () => {
    test('should return proper data', async () => {
        const weatherData = await getWeatherData('Chicago');
        expect(weatherData.currentDate).toEqual("04/05/2019");
    })
    test('should do case insensitive search', async () => {
        const weatherData = await getWeatherData('los angeles');
        expect(weatherData.currentDate).toEqual("04/05/2019");
    })
    test('should return error on invalid city', async () => {
        try {
            await getWeatherData('invalid city');
        } catch (error) {
            expect(error.success).toEqual(false);
        }
    })
});