
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import App from './App';

describe('App Component', () => {
  it('renders the component with the expected text content', () => {
    render(<App />);

    expect(screen.getByText('Component page')).toBeInTheDocument();
  });
});
