import { render } from '@testing-library/react';
import React from 'react';

import { TableOfContents } from './TableOfContents';

test('renders', () => {
  const { container } = render(<TableOfContents />);
  expect(container.childNodes.length).not.toEqual(0);
});
