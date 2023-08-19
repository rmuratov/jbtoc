import s from './App.module.scss';
import { TableOfContents } from './TableOfContents';
import { useFetchTocData } from './TableOfContents/hooks';

function App() {
  const { data, state } = useFetchTocData();

  return (
    <div className={s.app}>
      <TableOfContents data={data} isLoading={state === 'loading'} />

      <main>
        <h1>JB TOC</h1>
      </main>
    </div>
  );
}

export default App;
