import React from 'react';
import styles from './App.module.scss'

const App: React.FC = () => {
  const [count, setCount] = React.useState<number>(0);
  return (
    <div className={styles.container}>
      <h1>SessXGallery Next</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          Preparing for {count} time{count > 1 ? 's' : ''}
        </button>
        <p>
          I am cute, please give me money.
        </p>
      </div>
    </div>
  );
}

export default App;
