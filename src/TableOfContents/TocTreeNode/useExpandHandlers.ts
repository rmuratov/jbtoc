import { MouseEventHandler, useCallback, useMemo, useState } from 'react';

import type { TocPageId } from '../types/ITableOfContents';

import { useTocContext } from '../context';

export function useExpandHandlers(id: TocPageId) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { activePageId, setActivePageId } = useTocContext();

  const handleItemClick: MouseEventHandler = useCallback(
    e => {
      e.preventDefault();

      setActivePageId(id);

      setIsExpanded(isExpanded => {
        if (isExpanded && id !== activePageId) {
          return true;
        }

        return !isExpanded;
      });
    },
    [activePageId, id, setActivePageId],
  );

  const handleButtonExpandClick: MouseEventHandler = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(isExpanded => !isExpanded);
  }, []);

  return useMemo(
    () => ({ handleButtonExpandClick, handleItemClick, isExpanded }),
    [handleButtonExpandClick, handleItemClick, isExpanded],
  );
}
