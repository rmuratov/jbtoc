import s from './App.module.scss';
import { TableOfContents } from './TableOfContents';

function App() {
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
