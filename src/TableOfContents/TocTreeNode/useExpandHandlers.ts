import { MouseEventHandler, useCallback, useMemo, useState } from 'react';

import type { TocPageId } from '../types';

import { useTocContext } from '../hooks';

export function useExpandHandlers(id: TocPageId) {
  const { activePageId, setActivePageId } = useTocContext();
  const [isExpanded, setIsExpanded] = useState(false);

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
