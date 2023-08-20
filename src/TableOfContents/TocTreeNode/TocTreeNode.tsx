import type { FC } from 'react';

import type { TocPageId } from '../types/ITableOfContents';

import { ButtonExpand, Link, ListItemContainer } from '../components';
import { useTocContext } from '../context';
import { useHighlightMode } from '../hooks';
import s from './TocTreeNode.module.scss';
import { useExpandHandlers } from './useExpandHandlers';

export const TocTreeNode: FC<TocTreeNodeProps> = ({ highlight, id }) => {
  const { activePageId, pages } = useTocContext();
  const highlightMode = useHighlightMode(id, highlight);
  const { handleButtonExpandClick, handleItemClick, isExpanded } = useExpandHandlers(id);

  const page = pages[id];

  return (
    <>
      <ListItemContainer onClick={handleItemClick}>
        <Link
          highlight={highlightMode}
          href={page.url}
          isSelected={activePageId === id}
          level={page.level}
        >
          {page.pages?.length && (
            <ButtonExpand
              className={s.icon}
              isExpanded={isExpanded}
              onClick={handleButtonExpandClick}
            />
          )}
          {page.title}
        </Link>
      </ListItemContainer>

      {isExpanded && page.pages?.map(p => <TocTreeNode highlight={highlightMode} id={p} key={p} />)}
    </>
  );
};

export interface TocTreeNodeProps {
  highlight?: 'none' | 'primary' | 'secondary';
  id: string;
  pages?: TocPageId[];
}
