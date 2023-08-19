import {
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

import { ITableOfContents, TocPage, TocPageId } from '../types/ITableOfContents';

const TocContext = createContext<ITocContext | undefined>(undefined);

export const TocContextProvider: FC<PropsWithChildren<TocContextProviderProps>> = ({
  children,
  data,
}) => {
  const [selectedPage, setSelectedPage] = useState<TocPageId | null>(null);

  const pages = data?.entities.pages;

  return (
    <TocContext.Provider value={{ pages, selectedPage, setSelectedPage }}>
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
  pages?: Record<string, TocPage>;
  selectedPage: TocPageId | null;
  setSelectedPage: Dispatch<SetStateAction<TocPageId | null>>;
}

export interface TocContextProviderProps {
  data?: ITableOfContents;
}
