import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import type { ITableOfContents } from '../types';

import { TableOfContents } from '../TableOfContents';
import fixture from './fixture.json';

const data: ITableOfContents = fixture as unknown as ITableOfContents;

describe('general', () => {
  test('renders', () => {
    render(<TableOfContents />);
  });

  test('shows preloader when passing `isLoading` prop', () => {
    const { rerender } = render(<TableOfContents isLoading />);
    expect(screen.getByTestId('toc-preloader')).toBeInTheDocument();
    expect(screen.queryByTestId('toc-list')).toBeNull();
    rerender(<TableOfContents data={data} />);
    expect(screen.queryByText('toc-preloader')).toBeNull();
    expect(screen.getByTestId('toc-list')).toBeInTheDocument();
  });

  test('renders top level items', () => {
    render(<TableOfContents data={data} />);
    expect(screen.getByText('Page 1')).toBeInTheDocument();
    expect(screen.queryByText('Page 1 1')).toBeNull();
  });
});

describe('expanding/collapsing', () => {
  test('expands after clicking an item', async () => {
    render(<TableOfContents data={data} />);
    await userEvent.click(screen.getByText('Page 1'));
    await screen.findByText('Page 1 1');
  });

  test('collapses after clicking an active item', async () => {
    render(<TableOfContents data={data} />);
    await userEvent.click(screen.getByText('Page 1'));
    await screen.findByText('Page 1 1');
    await userEvent.click(screen.getByText('Page 1'));
    await waitFor(() => expect(screen.queryByText('Page 1 1')).toBeNull());
  });

  test('does not collapse after clicking an active item', async () => {
    render(<TableOfContents data={data} />);
    await userEvent.click(screen.getByText('Page 1'));
    await userEvent.click(screen.getByText('Page 2'));
    await userEvent.click(screen.getByText('Page 1'));
    await screen.findByText('Page 1 1');
  });

  test('expands after clicking button', async () => {
    render(<TableOfContents data={data} />);
    const btn = within(screen.getByText('Page 1')).getByTestId('toc-button-expand');
    await userEvent.click(btn);
    await screen.findByText('Page 1 1');
  });

  test('collapses after clicking button', async () => {
    render(<TableOfContents data={data} />);
    const btn = within(screen.getByText('Page 1')).getByTestId('toc-button-expand');
    await userEvent.click(btn);
    await screen.findByText('Page 1 1');
    await userEvent.click(btn);
    expect(screen.queryByText('Page 1 1')).toBeNull();
  });

  test('clicking button does not makes item selected', async () => {
    render(<TableOfContents data={data} />);
    const btn = within(screen.getByText('Page 1')).getByTestId('toc-button-expand');
    await userEvent.click(btn);
    expect(screen.getByText('Page 1 1')).not.toHaveClass('selected');
  });
});

describe('highlighting', () => {
  test('makes clicked item selected', async () => {
    render(<TableOfContents data={data} />);
    await userEvent.click(screen.getByText('Page 1'));
    expect(screen.getByText('Page 1')).toHaveClass('selected');

    await userEvent.click(screen.getByText('Page 1 1'));
    expect(screen.getByText('Page 1 1')).toHaveClass('selected');
    expect(screen.getByText('Page 1')).not.toHaveClass('selected');
  });

  test('highlights first level', async () => {
    render(<TableOfContents data={data} />);
    await userEvent.click(screen.getByText('Page 1'));

    expect(screen.getByText('Page 1 1')).toHaveClass('highlightFirstLevel');
    expect(screen.getByText('Page 1 2')).toHaveClass('highlightFirstLevel');
    expect(screen.getByText('Page 1 3')).toHaveClass('highlightFirstLevel');
  });

  test('highlights last level', async () => {
    render(<TableOfContents data={data} />);
    await userEvent.click(screen.getByText('Page 1'));
    await userEvent.click(screen.getByText('Page 1 1'));
    await userEvent.click(screen.getByText('Page 1 1 1'));
    await userEvent.click(screen.getByText('Page 1 1 1 1'));

    expect(screen.getByText('Page 1 1 1')).toHaveClass('highlightLastLevel');
    expect(screen.getByText('Page 1 1 1 2')).toHaveClass('highlightLastLevel');

    expect(screen.getByText('Page 1')).toHaveClass('highlightFirstLevel');
    expect(screen.getByText('Page 1 1')).toHaveClass('highlightFirstLevel');
    expect(screen.getByText('Page 1 1 2')).toHaveClass('highlightFirstLevel');
    expect(screen.getByText('Page 1 2')).toHaveClass('highlightFirstLevel');
    expect(screen.getByText('Page 1 3')).toHaveClass('highlightFirstLevel');
  });
});

describe('nesting', () => {
  test('nests correctly', async () => {
    render(<TableOfContents data={data} />);
    await userEvent.click(screen.getByText('Page 1'));
    await userEvent.click(screen.getByText('Page 1 1'));
    await userEvent.click(screen.getByText('Page 1 1 1'));
    await userEvent.click(screen.getByText('Page 1 1 1 1'));

    expect(screen.getByText('Page 1')).toHaveStyle('--level: 0');
    expect(screen.getByText('Page 1 1')).toHaveStyle('--level: 1');
    expect(screen.getByText('Page 1 1 1')).toHaveStyle('--level: 2');
    expect(screen.getByText('Page 1 1 1 1')).toHaveStyle('--level: 3');
  });
});

describe('theme', () => {
  test('adds theme class when passing `theme` prop', () => {
    const { rerender } = render(<TableOfContents data={data} />);
    expect(screen.getByTestId('toc-container')).not.toHaveClass('dark');
    rerender(<TableOfContents data={data} theme="dark" />);
    expect(screen.getByTestId('toc-container')).toHaveClass('dark');
  });
});
