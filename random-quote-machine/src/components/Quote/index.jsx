import { Button } from '../Button';
import { fetchQuote } from '../../api';

import styles from './styles.module.scss';

export const Quote = ({ quote, setQuote }) => {
  const handleNewQuote = () => fetchQuote(setQuote);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Random Quote Machine</h1>
      <p className={styles.quoteText}>{quote.quoteText}</p>
      <p className={styles.quoteAuthor}>{quote.quoteAuthor}</p>
      <Button onClick={handleNewQuote}>New Quote</Button>
    </div>
  );
};
