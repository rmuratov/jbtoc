import type { FC, PropsWithChildren, ReactNode } from 'react';

import cx from 'clsx';

import s from './Link.module.scss';

export const Link: FC<PropsWithChildren<LinkProps>> = ({
  before,
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
        s.link,
        primary && s.highlightPrimary,
        secondary && s.highlightSecondary,
        isSelected && s.selected,
      )}
      href={href}
      // TODO
      // @ts-ignore
      style={{ '--toc-item-left-offset': `${level * 16 + 16}px` }}
    >
      {before}
      {children}
    </a>
  );
};

export interface LinkProps {
  before: ReactNode;
  highlight: 'none' | 'primary' | 'secondary';
  href?: string;
  isSelected: boolean;
  level: number;
}
