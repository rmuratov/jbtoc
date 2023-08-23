import { MouseEvent, MouseEventHandler, useCallback, useEffect, useMemo, useState } from 'react';

import type { TocPage, TocPageId } from '../types';

import { useTocContext } from '../hooks';

export function useExpandHandlers(
  id: TocPageId,
  onClick?: (page: TocPage, event: MouseEvent) => void,
) {
  const { activePageId, activePagePath, pages, setActivePageId } = useTocContext();

  const isInsideActiveBranch = activePagePath.includes(id);
  const [isAutoExpanded, setIsAutoExpanded] = useState(isInsideActiveBranch);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isInsideActiveBranch) {
      setIsAutoExpanded(isExpanded || true);
    }
  }, [isInsideActiveBranch, id, isExpanded]);

  const handleItemClick: MouseEventHandler = useCallback(
    e => {
      e.preventDefault();

      setIsExpanded(isExpanded => {
        if (isExpanded && id !== activePageId) {
          return true;
        }

        return !isExpanded;
      });

      if (activePageId !== id) {
        setActivePageId(id);
      }

      onClick?.(pages[id], e);
    },
    [activePageId, id, setActivePageId, onClick, pages],
  );

  const handleButtonExpandClick: MouseEventHandler = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(isExpanded => !isExpanded);
  }, []);

  return useMemo(
    () => ({ handleButtonExpandClick, handleItemClick, isExpanded }),
    [handleButtonExpandClick, handleItemClick, isExpanded, isExpanded],
  );
}
