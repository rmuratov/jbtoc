import type { FC, PropsWithChildren } from 'react';

import s from './List.module.scss';

export const List: FC<PropsWithChildren<ListProps>> = ({ children }) => {
  return (
    <ul className={s.list} data-testid="toc-list">
      {children}
    </ul>
  );
};

export interface ListProps {}
