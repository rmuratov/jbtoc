import type { CSSProperties, FC, PropsWithChildren } from 'react';

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

  const style = { '--level': level } as CSSProperties;

  return (
    <a
      className={cx(
        s.listItem,
        primary && s.highlightPrimary,
        secondary && s.highlightSecondary,
        isSelected && s.selected,
      )}
      data-testid="toc-list-item"
      href={href}
      style={style}
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
