import type { FC } from 'react';

import { TocTreeNode } from '../TocTreeNode/TocTreeNode';
import { useTocContext } from '../hooks';
import { HighlightMode } from '../types/HighlightLevels';

export const TocTreeNodeList: FC = () => {
  const { activePagePath, topLevelIds } = useTocContext();
  return topLevelIds.map(id => (
    <TocTreeNode
      highlight={activePagePath[0] === id ? HighlightMode.Secondary : HighlightMode.None}
      id={id}
      key={id}
    />
  ));
};
