import { useContext } from 'react';

import { TocContext } from '../context';

export function useTocContext() {
  const context = useContext(TocContext);

  if (context === undefined) {
    throw new Error('useTocContext must be used within a TocContextProvider');
  }

  return context;
}
