import { makeObservable, observable, autorun, computed, action } from 'mobx';

class Store {
  searchHistory = [];

  constructor() {
    makeObservable(this, {
      searchHistory: observable,
      report: computed,
      addSearch: action,
    });
    autorun(() => console.log(this.report));
  }

  get report() {
    const history = [...this.searchHistory];
    return history.join(', ');
  }

  addSearch(location) {
    this.searchHistory.push(location);
  }
}

export const store = new Store();
