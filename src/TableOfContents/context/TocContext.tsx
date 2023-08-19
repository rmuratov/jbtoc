import {
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

import { usePagePath } from '../hooks';
import { ITableOfContents, TocPage, TocPageId } from '../types/ITableOfContents';

const TocContext = createContext<ITocContext | undefined>(undefined);

export const TocContextProvider: FC<PropsWithChildren<TocContextProviderProps>> = ({
  children,
  data,
}) => {
  const pages = data.entities.pages;

  const [activePageId, setActivePageId] = useState<TocPageId | null>(null);
  const pagePath = usePagePath(activePageId, pages);

  return (
    <TocContext.Provider value={{ activePageId, pagePath, pages, setActivePageId }}>
      {children}
    </TocContext.Provider>
  );
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
}

export interface TocContextProviderProps {
  data: ITableOfContents;
}
