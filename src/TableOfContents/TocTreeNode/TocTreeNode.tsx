import type { FC } from 'react';

import type { TocPageId } from '../types/ITableOfContents';

import { ButtonExpand, ListItem, ListItemContainer } from '../components';
import { useTocContext } from '../hooks';
import s from './TocTreeNode.module.scss';
import { useExpandHandlers } from './useExpandHandlers';
import { useHighlightMode } from './useHighlightMode';

export const TocTreeNode: FC<TocTreeNodeProps> = ({ highlight, id }) => {
  const { activePageId, pages } = useTocContext();
  const highlightMode = useHighlightMode(id, highlight);
  const { handleButtonExpandClick, handleItemClick, isExpanded } = useExpandHandlers(id);

  const page = pages[id];

  return (
    <>
      <ListItemContainer onClick={handleItemClick}>
        <ListItem
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
        </ListItem>
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
