import React from 'react';
import { render } from '@testing-library/react';
import App from '../../components/home/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  // @ts-ignore
  expect(linkElement).toBeInTheDocument();
});
