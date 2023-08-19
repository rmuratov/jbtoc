import cx from 'clsx';
import { type FC } from 'react';

import { Icon } from '../IconExpand';
import { useTocContext } from '../context';
import { type TocPage } from '../types/ITableOfContents';
import s from './TocLink.module.scss';

export const TocLink: FC<TocLinkProps> = ({ highlight, isExpanded, page }) => {
  const { activePageId } = useTocContext();

  const isSelected = activePageId === page.id;

  let isHighlightedPrimary = highlight === 'primary';
  let isHighlightedSecondary = highlight === 'secondary';

  return (
    <a
      className={cx(
        s.link,
        isHighlightedPrimary && s.highlightedPrimary,
        isHighlightedSecondary && s.highlightedSecondary,
        isSelected && s.selected,
      )}
      href={page.url}
      // TODO
      // @ts-ignore
      style={{ '--toc-item-left-offset': `${page.level * 16 + 16}px` }}
    >
      {page.pages?.length && <Icon className={s.icon} isExpanded={isExpanded} />}
      {page.title}
    </a>
  );
};

export interface TocLinkProps {
  highlight?: 'none' | 'primary' | 'secondary';
  isExpanded?: boolean;
  page: TocPage;
}
