import type { FC } from 'react';

import { TocTreeNode } from '../TocTreeNode/TocTreeNode';
import { useTocContext } from '../hooks';

export const TocTreeNodeList: FC = () => {
  const { activePagePath, topLevelIds } = useTocContext();
  return topLevelIds.map(id => (
    <TocTreeNode highlight={activePagePath[0] === id ? 'secondary' : 'none'} id={id} key={id} />
  ));
};
