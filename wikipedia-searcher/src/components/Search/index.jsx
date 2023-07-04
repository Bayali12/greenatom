import { observer } from 'mobx-react-lite';

import { Input } from '../Input';
import { Button } from '../Button';
import searchStore from '../../store';

import styles from './styles.module.scss';

const Search = observer(() => {
  const handleSearch = () => {
    searchStore.search();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchStore.search();
    }
  };

  return (
    <div className={styles.container}>
      <Input
        placeholder={'Search here'}
        value={searchStore.searchQuery}
        onChange={(e) => searchStore.setSearchQuery(e.target.value)}
        classname={styles.searchInput}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleSearch} classname={styles.searchButton}>
        Search
      </Button>
    </div>
  );
});

export default Search;
