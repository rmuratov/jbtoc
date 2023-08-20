import { useState } from 'react';

import s from './App.module.scss';
import { TableOfContents } from './TableOfContents';
import { useFetchTocData } from './TableOfContents/hooks';

function App() {
  const { data, state } = useFetchTocData();

  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  return (
    <div className={s.app}>
      <TableOfContents data={data} isLoading={state === 'loading'} theme={theme} />

      <main>
        <h1>JB TOC</h1>
        <button onClick={() => setTheme(theme => (theme === 'light' ? 'dark' : 'light'))}>
          Toggle theme
        </button>
      </main>
    </div>
  );
}

export default App;
