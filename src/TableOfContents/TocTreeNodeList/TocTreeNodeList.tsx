import type { FC } from 'react';

import { TocTreeNode } from '../TocTreeNode/TocTreeNode';
import { useTocContext } from '../hooks';
import { Highlight } from '../types/HighlightLevels';

export const TocTreeNodeList: FC = () => {
  const { activePagePath, topLevelIds } = useTocContext();
  return topLevelIds.map(id => {
    const highlight = id === activePagePath[0] ? Highlight.FirstLevel : Highlight.None;

    return <TocTreeNode highlight={highlight} id={id} key={id} />;
  });
};
