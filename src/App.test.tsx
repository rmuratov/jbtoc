import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders', () => {
  const { container } = render(<App />);
  expect(container.childNodes.length).not.toEqual(0);
});
