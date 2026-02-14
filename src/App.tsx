import React from 'react';
import styles from './App.module.scss'

const Background: React.FC = () => {
  return (
    <div className={styles.backgrounds}>
    	<div></div>
    	<div></div>
    	<div></div>
    	<div></div>
    </div>
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
}

export default App;
