import React from 'react';
import {
    fireEvent,
    waitForDomChange,
    screen,
    cleanup,
} from '@testing-library/react';
import { render } from 'common/test-utils';
import WeatherDetailsPage from './WeatherDetailsPage';


describe('WeatherDetailsPage', () => {
    afterEach(() => {
        cleanup();
    });
    test('should renders properly', async () => {
        render(<WeatherDetailsPage />);
        expect(screen.queryByText("Weather details")).toBeTruthy();
    });
    test('should search for city', async () => {
        render(<WeatherDetailsPage />);
        fireEvent.change(screen.getByPlaceholderText('Enter city'), { target: { value: 'Chicago' } });
        fireEvent.click(screen.getByTestId('searchCityBtn'));
        await waitForDomChange();
        expect(screen.queryByText(": Chicago")).toBeTruthy();
    });
    test('should display error for invalid city', async () => {
        render(<WeatherDetailsPage />);
        fireEvent.change(screen.getByPlaceholderText('Enter city'), { target: { value: 'invalid city' } });
        fireEvent.click(screen.getByTestId('searchCityBtn'));
        await waitForDomChange();
        expect(screen.queryByText("Unable to fetch weather details for invalid city")).toBeTruthy();
    });
    test('should not open 5day weather if data not loaded', async () => {
        const historyMock = { push: jest.fn() }
        render(<WeatherDetailsPage history={historyMock} />);
        fireEvent.click(screen.getByTestId('5dayweather'));
        expect(historyMock.push).not.toHaveBeenCalled();
    });
    test('should open 5day weather if data  loaded', async () => {
        const historyMock = { push: jest.fn() }
        render(<WeatherDetailsPage history={historyMock} />);
        fireEvent.change(screen.getByPlaceholderText('Enter city'), { target: { value: 'Chicago' } });
        fireEvent.click(screen.getByTestId('searchCityBtn'));
        await waitForDomChange();
        fireEvent.click(screen.getByTestId('5dayweather'));
        expect(historyMock.push).toHaveBeenCalled();
    });
})