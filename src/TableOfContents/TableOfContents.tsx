import { FC } from 'react';

import s from './TableOfContents.module.scss';

export const TableOfContents: FC<TableOfContentsProps> = () => {
  return <div className={s.container}>TOC</div>;
};

export interface TableOfContentsProps {}
