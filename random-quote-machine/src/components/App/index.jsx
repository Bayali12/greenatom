import React, { useState, useEffect } from 'react';

import { Quote } from '../Quote';
import { fetchQuote } from '../../api';

import styles from './styles.module.scss';

function App() {
  const [quote, setQuote] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('white');

  useEffect(() => {
    fetchQuote(setQuote);
  }, []);

  useEffect(() => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  }, [quote]);

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    return rgbColor;
  };

  return (
    <div className={styles.container} style={{ backgroundColor: backgroundColor }}>
      <Quote quote={quote} setQuote={setQuote} />
    </div>
  );
}

export default App;
