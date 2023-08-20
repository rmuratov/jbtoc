import type { FC } from 'react';

import type { ITableOfContents } from './types/ITableOfContents';

import s from './TableOfContents.module.scss';
import { TocTreeNodeList } from './TocTreeNodeList/TocTreeNodeList';
import { TocContextProvider } from './context';

export const TableOfContents: FC<TableOfContentsProps> = ({ data, isLoading, theme = 'light' }) => {
  return (
    <nav className={s.container}>
      {isLoading ? (
        'LOADING'
      ) : !data ? null : (
        <TocContextProvider data={data}>
          <ul className={s.ul}>
            <TocTreeNodeList topLevelIds={data.topLevelIds} />
          </ul>
        </TocContextProvider>
      )}
    </nav>
  );
};

export interface TableOfContentsProps {
  data?: ITableOfContents;
  isLoading?: boolean;
  theme?: 'dark' | 'light';
}
