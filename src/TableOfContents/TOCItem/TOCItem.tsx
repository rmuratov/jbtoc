import { FC, MouseEventHandler, useState } from 'react';

import { Icon } from '../../Icon';
import { TOCPage, TOCPageId } from '../../types/ITableOfContents';
import s from './TOCItem.module.scss';

export const TOCItem: FC<TOCItemProps> = ({ id, pages }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const page = pages[id];

  const handleClick: MouseEventHandler<HTMLLIElement> = e => {
    e.preventDefault();
    setIsExpanded(isExpanded => !isExpanded);
  };

  return (
    <>
      <li className={s.listItem} onClick={handleClick}>
        <a className={s.link} href={page.url} style={{ paddingLeft: `${page.level * 10}px` }}>
          {page.pages?.length ? <Icon isExpanded={isExpanded} /> : ''} {page.title}
        </a>
      </li>
      {isExpanded && page.pages?.map(p => <TOCItem id={p} key={p} pages={pages} />)}
    </>
  );
};

export interface TOCItemProps {
  id: string;
  pages: Record<TOCPageId, TOCPage>;
}
