import cx from 'clsx';
import { FC } from 'react';

import { Icon } from '../../Icon';
import { useTocContext } from '../../lib/TocContext';
import { TocPage } from '../../types/ITableOfContents';
import s from './TocLink.module.scss';

export const TocLink: FC<TocLinkProps> = ({ isExpanded, page }) => {
  const { selectedPage } = useTocContext();

  const isSelected = selectedPage === page.id;

  return (
    <a
      className={cx(s.link, isSelected && s.selected)}
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
  isExpanded?: boolean;
  page: TocPage;
}
