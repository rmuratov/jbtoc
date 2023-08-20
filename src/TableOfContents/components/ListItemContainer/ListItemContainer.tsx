import type { FC, MouseEventHandler, PropsWithChildren } from 'react';

import s from './ListItemContainer.module.scss';

export const ListItemContainer: FC<PropsWithChildren<ListItemContainerProps>> = ({
  children,
  onClick,
}) => {
  return (
    <li className={s.listItemContainer} onClick={onClick}>
      {children}
    </li>
  );
};

export interface ListItemContainerProps {
  onClick?: MouseEventHandler<HTMLLIElement>;
}
