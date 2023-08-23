import {
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';

import type { ITableOfContents, TocPageId, TocPages } from '../types';
import type { Theme } from '../types/Theme';

import { useActivePagePath } from '../hooks';

export const TocContext = createContext<ITocContext | undefined>(undefined);

// TODO: Extract often changed values to separate context
export const TocContextProvider: FC<PropsWithChildren<TocContextProviderProps>> = ({
  children,
  data,
  theme,
}) => {
  const pages = data.entities.pages;
  const topLevelIds = data.topLevelIds;

  const [activePageId, setActivePageId] = useState<TocPageId | null>(null);
  const activePagePath = useActivePagePath(activePageId, pages);

  const value = useMemo(
    () => ({ activePageId, activePagePath, pages, setActivePageId, theme, topLevelIds }),
    [activePageId, activePagePath, pages, topLevelIds, theme],
  );

  return <TocContext.Provider value={value}>{children}</TocContext.Provider>;
};

export interface ITocContext {
  activePageId: TocPageId | null;
  activePagePath: TocPageId[];
  pages: TocPages;
  setActivePageId: Dispatch<SetStateAction<TocPageId | null>>;
  theme: Theme;
  topLevelIds: TocPageId[];
}

export interface TocContextProviderProps {
  data: ITableOfContents;
  theme: Theme;
}
