import React from 'react';
import {
    fireEvent,
    screen,
    render
} from '@testing-library/react';
import FormControl from './FormControl';


describe('FormControl', () => {
    test('should renders properly', () => {
        render(<FormControl />);
        expect(screen).toMatchSnapshot()
    });
    test('should call showCityDetails on submit', () => {
        const showCityDetails = jest.fn();
        render(<FormControl showCityDetails={showCityDetails} />);
        fireEvent.change(screen.getByPlaceholderText('Enter city'), { target: { value: 'Chicago' } });
        fireEvent.click(screen.getByTestId('searchCityBtn'));
        expect(showCityDetails).toHaveBeenCalled();
    })
})