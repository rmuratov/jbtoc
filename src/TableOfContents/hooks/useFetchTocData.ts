import { useEffect, useState } from 'react';

import { ITableOfContents } from '../types/ITableOfContents';

export function useFetchTocData() {
  const [data, setData] = useState<ITableOfContents>();
  const [state, setState] = useState<FetchTocDataState>('default');
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

export type FetchTocDataState = 'default' | 'error' | 'loaded' | 'loading';
