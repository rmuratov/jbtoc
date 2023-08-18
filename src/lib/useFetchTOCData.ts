import { useEffect, useState } from 'react';

import { ITableOfContents } from '../types/ITableOfContents';

export function useFetchTOCData() {
  const [data, setData] = useState<ITableOfContents>();
  const [state, setState] = useState<FetchTOCDataState>('default');
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setState('loading');
    fetch('http://localhost:3001')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setState('loaded');
      })
      .catch(e => {
        setError(e);
        setState('error');
      });
  }, []);

  return { data, error, state };
}

export type FetchTOCDataState = 'default' | 'error' | 'loaded' | 'loading';
