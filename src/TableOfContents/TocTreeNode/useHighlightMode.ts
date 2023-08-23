import type { TocPageId } from '../types/ITableOfContents';

import { useTocContext } from '../hooks';
import { Highlight } from '../types/HighlightLevels';

export function useHighlightMode(pageId: TocPageId, parent: Highlight) {
  const { activePagePath, pages } = useTocContext();

  const page = pages[pageId];

  const isInsideLastLevel = page.id === activePagePath.at(-1);
  if (page.level > 0 && isInsideLastLevel) {
    return Highlight.LastLevel;
  }

  return parent;
}
