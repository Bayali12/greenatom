import { observer } from 'mobx-react-lite';
import searchStore from '../../store';

import styles from './styles.module.scss';
import { Article } from '../Article';

const ArticleList = observer(() => {
  return (
    <div className={styles.container}>
      {searchStore.searchResults.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          description={article.description}
          link={article.link}
        />
      ))}
    </div>
  );
});

export default ArticleList;
