import { useEffect, useState } from 'react';

import type { TocPageId, TocPages } from '../types/ITableOfContents';

export function usePagePath(activePageId: TocPageId | null, pages: TocPages) {
  const [path, setPath] = useState<TocPageId[]>([]);

  useEffect(() => {
    if (!activePageId) return;

    let chain = [];

    (function traverse(pageId: TocPageId) {
      if (!pages[pageId]) return;

      if (pages[pageId].pages?.length) {
        chain.unshift(pageId);
      }

      if (pages[pageId].parentId) {
        traverse(pages[pageId].parentId);
      }
    })(activePageId);

    setPath(chain);
  }, [activePageId, pages]);

  return path;
}
