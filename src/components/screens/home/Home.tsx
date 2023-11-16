import styles from './Home.module.css';
import { Component } from 'react';

import SearchBar from '../searchBar/SearchBar.tsx';

// TODO: add typing
class App extends Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <SearchBar />
        </div>
      </>
    );
  }
}

export default App;
