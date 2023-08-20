import type { FC } from 'react';

import type { ITableOfContents } from './types/ITableOfContents';

import { TocTreeNodeList } from './TocTreeNodeList';
import { Container, List } from './components';
import { TocContextProvider } from './context';

export const TableOfContents: FC<TableOfContentsProps> = ({ data, isLoading, theme = 'light' }) => {
  return (
    <Container>
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
