import { render, screen , fireEvent } from '@testing-library/react';
import {getRoles} from '@testing-library/dom'
import App from './App';

describe('My App', () => {
  it('Renders Header', () => {
    render(<App />);
    const headerElement = screen.getByText(/DOG CEO Challenge/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('Renders Button', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Search/i);
    expect(buttonElement).toBeInTheDocument();
  });

});