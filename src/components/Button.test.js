import React from 'react';
import {
    screen,
    render
} from '@testing-library/react';
import Button from './Button';


describe('Button', () => {
    test('should renders properly', async () => {
        render(<Button />);
        expect(screen).toMatchSnapshot()
    });
})