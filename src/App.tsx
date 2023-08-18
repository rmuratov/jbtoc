import { useEffect } from 'react';

import s from './App.module.scss';
import { TableOfContents } from './TableOfContents';

function App() {
  useEffect(() => {
    fetch('http://localhost:3001')
      .then(res => res.json())
      .then(r => console.log(r));
  }, []);

  return (
    <div className={s.app}>
      <aside>
        <TableOfContents />
      </aside>

      <main>
        <h1>JB TOC</h1>
      </main>
    </div>
  );
}

export default App;
