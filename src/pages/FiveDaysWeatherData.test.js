import React from 'react';
import {
    fireEvent,
    waitForDomChange,
    screen,
    cleanup,
} from '@testing-library/react';
import { render } from 'common/test-utils';
import FiveDaysWeatherData from './FiveDaysWeatherData';

const initialState = {
    weatherDetails: {
        status: 'DATA_LOADED',
        currentCityName: 'chicago',
        data: {
            chicago: {
                name: 'Chicago',
                forecast: [
                    {
                        Date: '04/05/2019',
                        Time: '2.59pm',
                        temprature: 47,
                        feels: 40
                    },
                    {
                        Date: '04/06/2019',
                        Time: '2.59pm',
                        temprature: 57,
                        feels: 55
                    },
                    {
                        Date: '04/07/2019',
                        Time: '2.59pm',
                        temprature: 45,
                        feels: 44
                    },
                    {
                        Date: '04/08/2019',
                        Time: '2.59pm',
                        temprature: 61,
                        feels: 50
                    },
                    {
                        Date: '04/09/2019',
                        Time: '2.59pm',
                        temprature: 68,
                        feels: 65
                    }
                ],
                currentDate: '04/05/2019',
                currentTime: '02:59 PM'
            }
        },
        message: ''
    }
};
describe('FiveDaysWeatherData', () => {
    afterEach(() => {
        cleanup();
    });
    const props = {
        match: { params: { cityName: 'chicago' } }
    }
    test('should renders properly', async () => {
        render(<FiveDaysWeatherData {...props} />, { initialState });
        expect(screen.queryByText("Five days weather data for Chicago")).toBeTruthy();
    });
    test('should go back on click Back button', async () => {
        const historyMock = { goBack: jest.fn() };
        render(<FiveDaysWeatherData history={historyMock} {...props} />, { initialState });
        fireEvent.click(screen.getByText('← Back'));
        expect(historyMock.goBack).toHaveBeenCalled();
    });
})