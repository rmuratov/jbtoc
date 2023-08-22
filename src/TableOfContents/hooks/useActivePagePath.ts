import { useMemo } from 'react';

import type { TocPageId, TocPages } from '../types/ITableOfContents';

export function useActivePagePath(activePageId: TocPageId | null, pages: TocPages): TocPageId[] {
  return useMemo(() => {
    if (!activePageId) return [];

    let currentPageId = activePageId;
    let chain = [];

    while (currentPageId) {
      const page = pages[currentPageId];
      if (page?.pages?.length) {
        chain.push(currentPageId);
      }
      currentPageId = page?.parentId;
    }

    return chain.reverse();
  }, [pages, activePageId]);
}
