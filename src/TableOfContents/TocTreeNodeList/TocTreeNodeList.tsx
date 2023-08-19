import { FC } from 'react';

import { TocTreeNode } from '../TocTreeNode/TocTreeNode';
import { useTocContext } from '../context';
import { TocPageId } from '../types/ITableOfContents';

export const TocTreeNodeList: FC<TocTreeNodeListProps> = ({ topLevelIds }) => {
  const { pagePath } = useTocContext();

  const highlight = (id: TocPageId) => (pagePath.includes(id) ? 'secondary' : 'none');

  return topLevelIds.map(id => <TocTreeNode highlight={highlight(id)} id={id} key={id} />);
};

export interface TocTreeNodeListProps {
  topLevelIds: TocPageId[];
}
