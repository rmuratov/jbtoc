import type { FC, MouseEventHandler, PropsWithChildren } from 'react';

export const ListItemContainer: FC<PropsWithChildren<ListItemContainerProps>> = ({
  children,
  onClick,
}) => {
  return (
    <li data-testid="list-item-container" onClick={onClick}>
      {children}
    </li>
  );
};

export interface ListItemContainerProps {
  onClick?: MouseEventHandler<HTMLLIElement>;
}
