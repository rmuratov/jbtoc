import { useState } from 'react';

import type { TocPage } from './TableOfContents/types';

import s from './App.module.scss';
import { TableOfContents } from './TableOfContents';
import { useFetchTocData } from './TableOfContents/hooks';

function App() {
  const { data, state } = useFetchTocData();

  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleItemClick = (page: TocPage) => console.log('Clicked item:', page);

  return (
    <div className={s.app}>
      <TableOfContents
        data={data}
        isLoading={isLoading || state === 'loading'}
        onItemClick={handleItemClick}
        theme={theme}
      />

      <main>
        <h1>JB TOC</h1>

        <button onClick={() => setTheme(theme => (theme === 'light' ? 'dark' : 'light'))}>
          Toggle theme
        </button>

        <button onClick={() => setIsLoading(isLoading => !isLoading)}>Toggle loading state</button>
      </main>
    </div>
  );
}

export default App;
