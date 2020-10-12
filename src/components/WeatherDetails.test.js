import React from 'react';
import {
    fireEvent,
    screen,
    render
} from '@testing-library/react';
import WeatherDetails from './WeatherDetails';

const data = {
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

describe('WeatherDetails', () => {
    test('should renders properly', () => {
        render(<WeatherDetails data={data} />);
        expect(screen).toMatchSnapshot()
    });
})