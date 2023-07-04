import Search from '../Search';
import logo from '../../assets/logo.svg';

import styles from './styles.module.scss';
import ArticlesList from '../ArticlesList';

export const App = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h1 className={styles.title}>WikiSearch</h1>
      <Search />
      <ArticlesList />
    </div>
  );
};
