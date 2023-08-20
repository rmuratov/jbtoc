import type { TocPageId } from '../types/ITableOfContents';

import { useTocContext } from '../hooks';

export function useHighlightMode(pageId: TocPageId, prev?: 'none' | 'primary' | 'secondary') {
  const { pagePath, pages } = useTocContext();

  const page = pages[pageId];

  if (!prev && pagePath.includes(pageId)) {
    return 'secondary';
  } else if (!prev) {
    return 'none';
  } else if (prev !== 'none' && page.id === pagePath.at(-1)) {
    return 'primary';
  }

  return prev;
}