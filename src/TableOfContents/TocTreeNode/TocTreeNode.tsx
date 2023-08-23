import type { FC } from 'react';

import type { Highlight, TocPageId } from '../types';

import { ButtonExpand, ListItem, ListItemContainer } from '../components';
import { useTocContext } from '../hooks';
import { useExpandHandlers } from './useExpandHandlers';
import { useHighlight } from './useHighlightMode';

export const TocTreeNode: FC<TocTreeNodeProps> = ({ highlight, id }) => {
  const { pages } = useTocContext();
  const { handleButtonExpandClick, handleItemClick, isExpanded } = useExpandHandlers(id);
  const { current, level } = useHighlight(id, highlight);

  const page = pages[id];

  return (
    <>
      <ListItemContainer>
        <ListItem highlight={current} href={page.url} level={page.level} onClick={handleItemClick}>
          {page.pages?.length && (
            <ButtonExpand isExpanded={isExpanded} onClick={handleButtonExpandClick} />
          )}
          {page.title}
        </ListItem>
      </ListItemContainer>

      {isExpanded && page.pages?.map(p => <TocTreeNode highlight={level} id={p} key={p} />)}
    </>
  );
};

export interface TocTreeNodeProps {
  highlight?: Exclude<Highlight, Highlight.Selected>;
  id: string;
  pages?: TocPageId[];
}
