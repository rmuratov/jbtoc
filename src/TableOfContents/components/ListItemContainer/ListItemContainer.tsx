import type { FC, PropsWithChildren } from 'react';

export const ListItemContainer: FC<PropsWithChildren> = ({ children }) => {
  return <li data-testid="toc-list-item-container">{children}</li>;
};
