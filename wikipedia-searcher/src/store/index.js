import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';

import { API_URL } from '../settings';

class SearchStore {
  searchQuery = '';
  searchResults = [];

  constructor() {
    makeAutoObservable(this);
  }

  setSearchQuery(query) {
    this.searchQuery = query;
  }

  async search() {
    if (this.searchQuery.trim() === '') {
      this.searchResults = [];
      return;
    }

    try {
      const response = await axios.get(`${API_URL}search=${this.searchQuery}`);

      const responseTitles = response.data[1];
      const responseDescriptions = response.data[2];
      const responseLinks = response.data[3];

      const results = responseTitles.map((title, index) => {
        return {
          title: title,
          description: responseDescriptions[index],
          link: responseLinks[index],
        };
      });

      runInAction(() => {
        this.searchResults = results;
      });
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
  }
}

const searchStore = new SearchStore();
export default searchStore;
