import { FC } from 'react';

import { ITableOfContents } from '../types/ITableOfContents';
import { TOCItem } from './TOCItem/TOCItem';
import s from './TableOfContents.module.scss';

export const TableOfContents: FC<TableOfContentsProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return 'LOADING';
  }

  return (
    <ul className={s.ul}>
      {data?.topLevelIds.map(id => <TOCItem id={id} key={id} pages={data?.entities.pages} />)}
    </ul>
  );
};

export interface TableOfContentsProps {
  data?: ITableOfContents;
  isLoading?: boolean;
}
