import React from 'react';
import { render } from '@testing-library/react';
import Planner from './Planner';

test('renders learn react link', () => {
  const { getByText } = render(<Planner />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
