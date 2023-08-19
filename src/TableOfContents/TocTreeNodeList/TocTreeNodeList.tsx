import { FC } from 'react';

import { TocTreeNode } from '../TocTreeNode/TocTreeNode';
import { useTocContext } from '../context';
import { TocPageId } from '../types/ITableOfContents';

function getHighlightLevel(
  pageId: TocPageId,
  pagePath: TocPageId[],
): 'none' | 'primary' | 'secondary' {
  if (pageId === pagePath.at(-1)) {
    return 'secondary';
  }

  return 'none';
}

export const TocTreeNodeList: FC<TocTreeNodeListProps> = ({ topLevelIds }) => {
  const { pagePath } = useTocContext();

  return topLevelIds.map(id => (
    <TocTreeNode highlight={getHighlightLevel(id, pagePath)} id={id} key={id} />
  ));
};

export interface TocTreeNodeListProps {
  topLevelIds: TocPageId[];
}
