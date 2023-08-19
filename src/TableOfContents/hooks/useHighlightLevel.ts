import { useTocContext } from '../context';
import { TocPageId } from '../types/ITableOfContents';

export function useHighlightLevel(pageId: TocPageId): 'none' | 'primary' | 'secondary' {
  const { pagePath, pages } = useTocContext();

  const parentId = pages[pageId].parentId;

  if (pagePath.length > 1 && pagePath[0] === parentId) {
    return 'primary';
  }

  if (pagePath.includes(parentId) || pagePath.includes(pageId)) {
    return 'secondary';
  }

  return 'none';
}
