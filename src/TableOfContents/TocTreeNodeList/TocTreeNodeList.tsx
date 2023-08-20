import type { FC } from 'react';

import type { TocPageId } from '../types/ITableOfContents';

import { TocTreeNode } from '../TocTreeNode/TocTreeNode';

export const TocTreeNodeList: FC<TocTreeNodeListProps> = ({ topLevelIds }) => {
  return topLevelIds.map(id => <TocTreeNode id={id} key={id} />);
};

export interface TocTreeNodeListProps {
  topLevelIds: TocPageId[];
}
