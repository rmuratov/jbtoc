import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import type { ITableOfContents } from '../types/ITableOfContents';

import { TableOfContents } from '../TableOfContents';
import fixture from './fixture.json';

const data: ITableOfContents = fixture as unknown as ITableOfContents;

test('renders', () => {
  render(<TableOfContents />);
});

test('shows preloader when passing `isLoading` prop', () => {
  render(<TableOfContents isLoading />);
  expect(screen.getByTestId('preloader')).toBeInTheDocument();
  expect(screen.queryByTestId('toc-list')).toBeNull();
});

test('renders collapsed table of contents by default', () => {
  render(<TableOfContents data={data} />);
  expect(screen.getByText('Page 1')).toBeInTheDocument();
  expect(screen.queryByText('Page 1 1')).toBeNull();
});

test('non active clicked item becomes active', async () => {
  render(<TableOfContents data={data} />);
  await userEvent.click(screen.getByText('Page 1'));
  expect(screen.getByText('Page 1')).toHaveClass('selected');
});

test('expands nested items after clicking an item', async () => {
  render(<TableOfContents data={data} />);
  await userEvent.click(screen.getByText('Page 1'));
  await screen.findByText('Page 1 1');
});

test('collapses nested items after clicking an item', async () => {
  render(<TableOfContents data={data} />);
  await userEvent.click(screen.getByText('Page 1'));
  await screen.findByText('Page 1 1');
  await userEvent.click(screen.getByText('Page 1'));
  await waitFor(() => expect(screen.queryByText('Page 1 1')).toBeNull());
});
