import { useTocContext } from '../context';
import { TocPageId } from '../types/ITableOfContents';

export function useHighlightLevel2(pageId: TocPageId): 'none' | 'primary' | 'secondary' {
  const { pagePath, pages } = useTocContext();

  if (pageId === pagePath[0]) {
    return 'primary';
  }

  return 'none';
}
