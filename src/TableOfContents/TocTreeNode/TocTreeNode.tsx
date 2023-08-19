import { FC, MouseEventHandler, useState } from 'react';

import { TocLink } from '../TocLink';
import { useTocContext } from '../context';
import { useHighlightMode } from '../hooks/useHighlightMode';
import s from './TocTreeNode.module.scss';

export const TocTreeNode: FC<TocTreeNodeProps> = ({ highlight, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { activePageId, pages, setActivePageId } = useTocContext();

  const highlightMode = useHighlightMode(id, highlight);

  const page = pages[id];

  const handleClick: MouseEventHandler<HTMLLIElement> = e => {
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
      <li className={s.listItem} onClick={handleClick}>
        <TocLink highlight={highlightMode} isExpanded={isExpanded} page={page} />
      </li>
      {isExpanded && page.pages?.map(p => <TocTreeNode highlight={highlightMode} id={p} key={p} />)}
    </>
  );
};

export interface TocTreeNodeProps {
  highlight?: 'none' | 'primary' | 'secondary';
  id: string;
}
