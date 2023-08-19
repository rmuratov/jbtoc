import { FC } from 'react';

import { TocTreeNode } from '../TocTreeNode/TocTreeNode';
import { TocPageId } from '../types/ITableOfContents';

export const TocTreeNodeList: FC<TocTreeNodeListProps> = ({ topLevelIds }) => {
  return topLevelIds.map(id => <TocTreeNode id={id} key={id} />);
};

export interface TocTreeNodeListProps {
  topLevelIds: TocPageId[];
}
