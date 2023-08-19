import { FC, MouseEventHandler, useState } from 'react';

import { TocLink } from '../TocLink';
import { useTocContext } from '../context';
import s from './TocTreeNode.module.scss';

export const TocTreeNode: FC<TocTreeNodeProps> = ({ highlight, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { pagePath, pages, setActivePageId } = useTocContext();

  const page = pages[id];

  const handleClick: MouseEventHandler<HTMLLIElement> = e => {
    e.preventDefault();
    setActivePageId(id);
    setIsExpanded(isExpanded => !isExpanded);
  };

  const isLastNode = page.id === pagePath.at(-1);

  let hlight = highlight;

  if (highlight !== 'none' && page.level > 0 && isLastNode) {
    hlight = 'primary';
  }

  return (
    <>
      <li className={s.listItem} onClick={handleClick}>
        <TocLink highlight={hlight} isExpanded={isExpanded} page={page} />
      </li>
      {isExpanded && page.pages?.map(p => <TocTreeNode highlight={hlight} id={p} key={p} />)}
    </>
  );
};

export interface TocTreeNodeProps {
  highlight?: 'none' | 'primary' | 'secondary';
  id: string;
}
