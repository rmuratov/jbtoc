import type { FC } from 'react';

import { TocTreeNode } from '../TocTreeNode/TocTreeNode';
import { useTocContext } from '../hooks';

export const TocTreeNodeList: FC = () => {
  const { topLevelIds } = useTocContext();
  return topLevelIds.map(id => <TocTreeNode id={id} key={id} />);
};
