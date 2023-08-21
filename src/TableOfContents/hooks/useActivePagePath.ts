import { useEffect, useState } from 'react';

import type { TocPageId, TocPages } from '../types/ITableOfContents';

export function useActivePagePath(activePageId: TocPageId | null, pages: TocPages) {
  const [path, setPath] = useState<TocPageId[]>([]);

  useEffect(() => {
    if (!activePageId) return;

    let currentPageId = activePageId;
    let chain = [];

    while (currentPageId) {
      const page = pages[currentPageId];
      if (page?.pages?.length) {
        chain.push(currentPageId);
      }
      currentPageId = page?.parentId;
    }

    setPath(chain.reverse());
  }, [activePageId, pages]);

  return path;
}
