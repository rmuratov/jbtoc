import type { AllHTMLAttributes, CSSProperties, FC, PropsWithChildren } from 'react';

import cx from 'clsx';

import { Highlight } from '../../types/HighlightLevels';
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
  const highlightFirstLevel = highlight === Highlight.FirstLevel;
  const highlightLastLevel = highlight === Highlight.LastLevel;

  const levelStyle = { '--level': level } as CSSProperties;

  return (
    <a
      className={cx(
        s.listItem,
        highlightFirstLevel && s.highlightFirstLevel,
        highlightLastLevel && s.highlightLastLevel,
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
  highlight: Highlight;
  isSelected: boolean;
  level: number;
}
