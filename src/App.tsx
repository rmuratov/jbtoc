import s from './App.module.scss';
import { TableOfContents } from './TableOfContents';
import { useFetchTOCData } from './lib/useFetchTOCData';

function App() {
  const { data, state } = useFetchTOCData();

  return (
    <div className={s.app}>
      <aside>
        <TableOfContents data={data} isLoading={state === 'loading'} />
      </aside>

      <main>
        <h1>JB TOC</h1>
      </main>
    </div>
  );
}

export default App;
