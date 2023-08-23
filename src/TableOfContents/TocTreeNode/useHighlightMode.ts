import type { TocPageId } from '../types/ITableOfContents';

import { useTocContext } from '../hooks';
import { Highlight } from '../types/HighlightLevels';

export function useHighlight(
  pageId: TocPageId,
  parent?: Exclude<Highlight, Highlight.Selected>,
): { current: Highlight; level: Exclude<Highlight, Highlight.Selected> } {
  const { activePageId, activePagePath } = useTocContext();

  if (parent === Highlight.None || !activePageId) {
    return { current: Highlight.None, level: Highlight.None };
  }

  let level: Highlight;

  if (!parent) {
    const isActivePageInsideLevel = pageId === activePagePath[0];
    level = isActivePageInsideLevel ? Highlight.FirstLevel : Highlight.None;
  } else {
    const isLastLevel = activePagePath.length > 0 && pageId === activePagePath.at(-1);
    level = isLastLevel ? Highlight.LastLevel : parent;
  }

  const current = pageId === activePageId ? Highlight.Selected : level;

  return { current, level };
}
