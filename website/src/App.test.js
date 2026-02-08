import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site heading', () => {
  render(<App />);
  const heading = screen.getByText(/Hidden Times Music/i);
  expect(heading).toBeInTheDocument();
});
