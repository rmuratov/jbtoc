import type { FC, PropsWithChildren } from 'react';

import cx from 'clsx';

import s from './ListItem.module.scss';

export const ListItem: FC<PropsWithChildren<ListItemProps>> = ({
  children,
  highlight,
  href,
  isSelected,
  level,
}) => {
  const primary = highlight === 'primary';
  const secondary = highlight === 'secondary';

  return (
    <a
      className={cx(
        s.listItem,
        primary && s.highlightPrimary,
        secondary && s.highlightSecondary,
        isSelected && s.selected,
      )}
      href={href}
      // TODO
      // @ts-ignore
      style={{ '--toc-item-left-offset': `${level * 16 + 16}px` }}
    >
      {children}
    </a>
  );
};

export interface ListItemProps {
  highlight: 'none' | 'primary' | 'secondary';
  href?: string;
  isSelected: boolean;
  level: number;
}
