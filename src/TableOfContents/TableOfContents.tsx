import { FC } from 'react';

import { ITableOfContents } from '../types/ITableOfContents';
import s from './TableOfContents.module.scss';

export const TableOfContents: FC<TableOfContentsProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return 'LOADING';
  }

  return <div className={s.container}>TOC</div>;
};

export interface TableOfContentsProps {
  data?: ITableOfContents;
  isLoading?: boolean;
}
