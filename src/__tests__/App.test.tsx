import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import ReactDOM from 'react-dom';

test('renders Get list of all users text', () => {
    render(<App />);
    const text = screen.getByText('Get list of all users');
    expect(text).toBeInTheDocument();
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});
