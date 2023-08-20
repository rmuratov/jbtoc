import { type FC, type MouseEventHandler, useState } from 'react';

import type { TocPageId } from '../types/ITableOfContents';

import { ButtonExpand, Link, ListItem } from '../components';
import { useTocContext } from '../context';
import { useHighlightMode } from '../hooks';
import s from './TocTreeNode.module.scss';

export const TocTreeNode: FC<TocTreeNodeProps> = ({ highlight, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { activePageId, pages, setActivePageId } = useTocContext();
  const highlightMode = useHighlightMode(id, highlight);

  const page = pages[id];

  const handleClick: MouseEventHandler = e => {
    e.preventDefault();

    setActivePageId(id);

    setIsExpanded(isExpanded => {
      if (isExpanded && id !== activePageId) {
        return true;
      }

      return !isExpanded;
    });
  };

  return (
    <>
      <ListItem onClick={handleClick}>
        <Link
          before={page.pages?.length && <ButtonExpand className={s.icon} isExpanded={isExpanded} />}
          highlight={highlightMode}
          href={page.url}
          isSelected={activePageId === page.id}
          level={page.level}
        >
          {page.title}
        </Link>
      </ListItem>

      {isExpanded && page.pages?.map(p => <TocTreeNode highlight={highlightMode} id={p} key={p} />)}
    </>
  );
};

export interface TocTreeNodeProps {
  highlight?: 'none' | 'primary' | 'secondary';
  id: string;
  pages?: TocPageId[];
}
