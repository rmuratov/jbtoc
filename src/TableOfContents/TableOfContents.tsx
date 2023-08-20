import type { FC } from 'react';

import cx from 'clsx';

import type { ITableOfContents } from './types/ITableOfContents';

import s from './TableOfContents.module.scss';
import { TocTreeNodeList } from './TocTreeNodeList';
import { Container, List } from './components';
import { TocContextProvider } from './context';

export const TableOfContents: FC<TableOfContentsProps> = ({ data, isLoading, theme = 'light' }) => {
  return (
    <Container className={cx(s.tableOfContents, theme === 'dark' && s.dark)}>
      {isLoading ? (
        'LOADING'
      ) : !data ? null : (
        <TocContextProvider data={data}>
          <List>
            <TocTreeNodeList />
          </List>
        </TocContextProvider>
      )}
    </Container>
  );
};

export interface TableOfContentsProps {
  data?: ITableOfContents;
  isLoading?: boolean;
  theme?: 'dark' | 'light';
}
