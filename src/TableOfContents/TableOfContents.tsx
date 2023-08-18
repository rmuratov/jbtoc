import { FC } from 'react';

import { ITableOfContents } from '../types/ITableOfContents';
import s from './TableOfContents.module.scss';
import { TocTree } from './TocTree/TocTree';

export const TableOfContents: FC<TableOfContentsProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return 'LOADING';
  }

  return (
    <nav className={s.container}>
      <ul className={s.ul}>
        {data?.topLevelIds.map(id => <TocTree id={id} key={id} pages={data?.entities.pages} />)}
      </ul>
    </nav>
  );
};

export interface TableOfContentsProps {
  data?: ITableOfContents;
  isLoading?: boolean;
}
