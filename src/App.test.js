// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DraftPin title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DraftPin/i);
    expect(titleElement).toBeInTheDocument();
});
