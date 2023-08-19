import { FC, MouseEventHandler, useState } from 'react';

import { TocLink } from '../TocLink';
import { useTocContext } from '../context';
import { useHighlightMode } from '../hooks/useHighlightMode';
import s from './TocTreeNode.module.scss';

export const TocTreeNode: FC<TocTreeNodeProps> = ({ highlight, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { pages, setActivePageId } = useTocContext();

  const h = useHighlightMode(id, highlight);

  const page = pages[id];

  const handleClick: MouseEventHandler<HTMLLIElement> = e => {
    e.preventDefault();
    setActivePageId(id);
    setIsExpanded(isExpanded => !isExpanded);
  };

  return (
    <>
      <li className={s.listItem} onClick={handleClick}>
        <TocLink highlight={h} isExpanded={isExpanded} page={page} />
      </li>
      {isExpanded && page.pages?.map(p => <TocTreeNode highlight={h} id={p} key={p} />)}
    </>
  );
};

export interface TocTreeNodeProps {
  highlight?: 'none' | 'primary' | 'secondary';
  id: string;
}
