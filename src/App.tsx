import React from 'react';
import styles from './App.module.scss'

const Background: React.FC = () => {
  const levels = 50;
  const tableValues = Array.from({ length: levels + 1 }, (_, i) => (i * 1 / levels).toString()).join(' ');
  return (
    <>
      <svg>
        <defs>
          <filter id="svg-filter">
            <feComponentTransfer>
              <feFuncR type="discrete" tableValues={tableValues} />
              <feFuncG type="discrete" tableValues={tableValues} />
              <feFuncB type="discrete" tableValues={tableValues} />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
      <div className={styles.backgrounds}>
        { Array.from({ length: 4 }, () => <div></div>) }
      </div>
    </>
  );
};

const App: React.FC = () => {
  const [count, setCount] = React.useState<number>(0);
  return (
    <>
      <Background />
      <h1>SessXGallery Next</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          Preparing for {count} time{count > 1 ? 's' : ''}
        </button>
        <p>
          I am cute, please give me money.
        </p>
      </div>
    </>
  );
};

export default App;
