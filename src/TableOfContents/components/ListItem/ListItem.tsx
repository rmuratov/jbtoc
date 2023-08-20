import type { FC, MouseEventHandler, PropsWithChildren } from 'react';

import s from './ListItem.module.scss';

export const ListItem: FC<PropsWithChildren<ListItemProps>> = ({ children, onClick }) => {
  return (
    <li className={s.listItem} onClick={onClick}>
      {children}
    </li>
  );
};

export interface ListItemProps {
  onClick?: MouseEventHandler<HTMLLIElement>;
}
