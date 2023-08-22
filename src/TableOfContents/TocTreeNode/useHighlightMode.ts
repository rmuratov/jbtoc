import type { TocPageId } from '../types/ITableOfContents';

import { useTocContext } from '../hooks';
import { HighlightMode } from '../types/HighlightLevels';

export function useHighlightMode(pageId: TocPageId, parent: HighlightMode) {
  const { activePagePath, pages } = useTocContext();

  const page = pages[pageId];

  const isInsideLastLevel = page.id === activePagePath.at(-1);
  if (page.level > 0 && isInsideLastLevel) {
    return HighlightMode.Primary;
  }

  return parent;
}
