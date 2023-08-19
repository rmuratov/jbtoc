import { useEffect, useState } from 'react';

import { TocPageId, TocPages } from '../types/ITableOfContents';

export function usePagePath(activePageId: TocPageId | null, pages: TocPages) {
  const [path, setPath] = useState<TocPageId[]>([]);

  useEffect(() => {
    if (!activePageId) return;

    let chain = [];

    (function traverse(pageId: TocPageId, pages: TocPages) {
      if (!pages[pageId]) return;
      chain.push(pageId);
      if (pages[pageId].parentId) {
        traverse(pages[pageId].parentId, pages);
      }
    })(activePageId, pages);

    setPath(chain);
  }, [activePageId, pages]);

  console.log('PATH', path);

  return path;
}
