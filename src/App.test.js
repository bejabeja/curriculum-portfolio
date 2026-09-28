import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the candidate name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Miriam Abella/i);
  expect(nameElement).toBeInTheDocument();
});
