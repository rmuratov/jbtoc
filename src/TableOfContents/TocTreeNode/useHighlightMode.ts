import type { TocPageId } from '../types/ITableOfContents';

import { useTocContext } from '../hooks';

export function useHighlightMode(pageId: TocPageId, parent: 'none' | 'primary' | 'secondary') {
  const { activePagePath, pages } = useTocContext();

  const page = pages[pageId];

  const isInsideLastLevel = page.id === activePagePath.at(-1);
  if (page.level > 0 && isInsideLastLevel) {
    return 'primary';
  }

  return parent;
}
