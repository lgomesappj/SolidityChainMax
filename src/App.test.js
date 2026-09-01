// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityChainMax title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityChainMax/i);
    expect(titleElement).toBeInTheDocument();
});
