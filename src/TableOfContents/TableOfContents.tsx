import type { FC, MouseEvent } from 'react';

import cx from 'clsx';

import type { ITableOfContents, TocPage } from './types';

import s from './TableOfContents.module.scss';
import { TocTreeNodeList } from './TocTreeNodeList';
import { Container, List, Preloader } from './components';
import { TocContextProvider } from './context';

export const TableOfContents: FC<TableOfContentsProps> = ({
  activePageId,
  containerClassName,
  data,
  isLoading,
  listItemClassName,
  onItemClick,
  theme = 'light',
}) => {
  return (
    <Container className={cx(s.tableOfContents, theme === 'dark' && s.dark, containerClassName)}>
      {isLoading ? (
        <Preloader />
      ) : !data ? null : (
        <TocContextProvider
          activePageId={activePageId}
          data={data}
          listItemClassName={listItemClassName}
          onItemClick={onItemClick}
          theme={theme}
        >
          <List>
            <TocTreeNodeList />
          </List>
        </TocContextProvider>
      )}
    </Container>
  );
};

export interface TableOfContentsProps {
  activePageId?: string;
  containerClassName?: string;
  data?: ITableOfContents;
  isLoading?: boolean;
  listItemClassName?: string;
  onItemClick?: (page: TocPage, event: MouseEvent) => void;
  theme?: 'dark' | 'light';
}
