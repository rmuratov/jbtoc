import type { AllHTMLAttributes, CSSProperties, FC, PropsWithChildren } from 'react';

import cx from 'clsx';

import { HighlightMode } from '../../types/HighlightLevels';
import s from './ListItem.module.scss';

export const ListItem: FC<PropsWithChildren<ListItemProps>> = ({
  children,
  className,
  highlight,
  isSelected,
  level,
  style,
  ...rest
}) => {
  const primary = highlight === HighlightMode.Primary;
  const secondary = highlight === HighlightMode.Secondary;

  const levelStyle = { '--level': level } as CSSProperties;

  return (
    <a
      className={cx(
        s.listItem,
        primary && s.highlightPrimary,
        secondary && s.highlightSecondary,
        isSelected && s.selected,
        className,
      )}
      data-testid="toc-list-item"
      style={{ ...style, ...levelStyle }}
      {...rest}
    >
      {children}
    </a>
  );
};

export interface ListItemProps extends AllHTMLAttributes<HTMLAnchorElement> {
  highlight: HighlightMode;
  isSelected: boolean;
  level: number;
}
