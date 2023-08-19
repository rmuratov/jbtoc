import { type FC } from 'react';

import { TocContextProvider } from '../lib/TocContext';
import { type ITableOfContents } from '../types/ITableOfContents';
import s from './TableOfContents.module.scss';
import { TocTree } from './TocTree/TocTree';

export const TableOfContents: FC<TableOfContentsProps> = ({ data, isLoading, theme = 'light' }) => {
  return (
    <TocContextProvider data={data}>
      <nav className={s.container}>
        <ul className={s.ul}>
          {isLoading
            ? 'LOADING'
            : data?.topLevelIds.map(id => (
                <TocTree id={id} key={id} pages={data?.entities.pages} />
              ))}
        </ul>
      </nav>
    </TocContextProvider>
  );
};

export interface TableOfContentsProps {
  data?: ITableOfContents;
  isLoading?: boolean;
  theme?: 'dark' | 'light';
}
