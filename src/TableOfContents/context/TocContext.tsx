import {
  type Dispatch,
  type FC,
  MouseEvent,
  type PropsWithChildren,
  type SetStateAction,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import type { ITableOfContents, TocPage, TocPageId, TocPages } from '../types';
import type { Theme } from '../types/Theme';

import { useActivePagePath } from '../hooks';

export const TocContext = createContext<ITocContext | undefined>(undefined);

// TODO: Extract often changed values to separate context
export const TocContextProvider: FC<PropsWithChildren<TocContextProviderProps>> = ({
  activePageId: activePageIdProp,
  children,
  data,
  listItemClassName,
  onItemClick,
  theme,
}) => {
  const pages = data.entities.pages;
  const topLevelIds = data.topLevelIds;

  const [activePageId, setActivePageId] = useState<TocPageId | undefined>(activePageIdProp);
  const activePagePath = useActivePagePath(pages, activePageId);

  useEffect(() => {
    setActivePageId(activePageIdProp);
  }, [activePageIdProp]);

  const value = useMemo(
    () => ({
      activePageId,
      activePagePath,
      listItemClassName,
      onItemClick,
      pages,
      setActivePageId,
      theme,
      topLevelIds,
    }),
    [activePageId, activePagePath, pages, topLevelIds, theme, listItemClassName, onItemClick],
  );

  return <TocContext.Provider value={value}>{children}</TocContext.Provider>;
};

export interface ITocContext {
  activePageId?: TocPageId;
  activePagePath: TocPageId[];
  listItemClassName?: string;
  onItemClick?: (page: TocPage, event: MouseEvent) => void;
  pages: TocPages;
  setActivePageId: Dispatch<SetStateAction<TocPageId | undefined>>;
  theme: Theme;
  topLevelIds: TocPageId[];
}

export interface TocContextProviderProps {
  activePageId?: string;
  data: ITableOfContents;
  listItemClassName?: string;
  onItemClick?: (page: TocPage, event: MouseEvent) => void;
  theme: Theme;
}
