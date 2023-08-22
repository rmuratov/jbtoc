import type { FC } from 'react';

import type { HighlightMode } from '../types/HighlightLevels';
import type { TocPageId } from '../types/ITableOfContents';

import { ButtonExpand, ListItem, ListItemContainer } from '../components';
import { useTocContext } from '../hooks';
import { useExpandHandlers } from './useExpandHandlers';
import { useHighlightMode } from './useHighlightMode';

export const TocTreeNode: FC<TocTreeNodeProps> = ({ highlight, id }) => {
  const { activePageId, pages } = useTocContext();
  const { handleButtonExpandClick, handleItemClick, isExpanded } = useExpandHandlers(id);
  const highlightMode = useHighlightMode(id, highlight);

  const page = pages[id];

  return (
    <>
      <ListItemContainer>
        <ListItem
          highlight={highlightMode}
          href={page.url}
          isSelected={activePageId === id}
          level={page.level}
          onClick={handleItemClick}
        >
          {page.pages?.length && (
            <ButtonExpand isExpanded={isExpanded} onClick={handleButtonExpandClick} />
          )}
          {page.title}
        </ListItem>
      </ListItemContainer>

      {isExpanded && page.pages?.map(p => <TocTreeNode highlight={highlightMode} id={p} key={p} />)}
    </>
  );
};

export interface TocTreeNodeProps {
  highlight: HighlightMode;
  id: string;
  pages?: TocPageId[];
}
