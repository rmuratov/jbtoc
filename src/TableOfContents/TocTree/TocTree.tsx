import { FC, MouseEventHandler, useState } from 'react';

import { useTocContext } from '../../lib/TocContext';
import { TocPage, TocPageId } from '../../types/ITableOfContents';
import { TocLink } from '../TocLink';
import s from './TocTree.module.scss';

export const TocTree: FC<TOCItemProps> = ({ id, pages }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { setSelectedPage } = useTocContext();

  const page = pages[id];

  const handleClick: MouseEventHandler<HTMLLIElement> = e => {
    e.preventDefault();
    setSelectedPage(id);
    setIsExpanded(isExpanded => !isExpanded);
  };

  return (
    <>
      <li className={s.listItem} onClick={handleClick}>
        <TocLink isExpanded={isExpanded} page={page} />
      </li>
      {isExpanded && page.pages?.map(p => <TocTree id={p} key={p} pages={pages} />)}
    </>
  );
};

export interface TOCItemProps {
  id: string;
  pages: Record<TocPageId, TocPage>;
}
