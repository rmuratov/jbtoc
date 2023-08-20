import {
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

import type { ITableOfContents, TocPage, TocPageId } from '../types/ITableOfContents';

import { usePagePath } from '../hooks';

const TocContext = createContext<ITocContext | undefined>(undefined);

export const TocContextProvider: FC<PropsWithChildren<TocContextProviderProps>> = ({
  children,
  data,
}) => {
  const pages = data.entities.pages;
  const topLevelIds = data.topLevelIds;

  const [activePageId, setActivePageId] = useState<TocPageId | null>(null);
  const pagePath = usePagePath(activePageId, pages);

  const value = useMemo(
    () => ({ activePageId, pagePath, pages, setActivePageId, topLevelIds }),
    [activePageId, pagePath, pages, topLevelIds],
  );

  return <TocContext.Provider value={value}>{children}</TocContext.Provider>;
};

export function useTocContext() {
  const context = useContext(TocContext);

  if (context === undefined) {
    throw new Error('useTocContext must be used within a TocContextProvider');
  }

  return context;
}

export interface ITocContext {
  activePageId: TocPageId | null;
  pagePath: TocPageId[];
  pages: Record<string, TocPage>;
  setActivePageId: Dispatch<SetStateAction<TocPageId | null>>;
  topLevelIds: TocPageId[];
}

export interface TocContextProviderProps {
  data: ITableOfContents;
}
