import { type FC } from 'react';

import s from './TableOfContents.module.scss';
import { TocTreeNodeList } from './TocTreeNodeList/TocTreeNodeList';
import { TocContextProvider } from './context';
import { type ITableOfContents } from './types/ITableOfContents';

export const TableOfContents: FC<TableOfContentsProps> = ({ data, isLoading, theme = 'light' }) => {
  return (
    <nav className={s.container}>
      {isLoading ? (
        'LOADING'
      ) : data ? (
        <TocContextProvider data={data}>
          <ul className={s.ul}>
            <TocTreeNodeList topLevelIds={data.topLevelIds} />
          </ul>
        </TocContextProvider>
      ) : null}
    </nav>
  );
};

export interface TableOfContentsProps {
  data?: ITableOfContents;
  isLoading?: boolean;
  theme?: 'dark' | 'light';
}
