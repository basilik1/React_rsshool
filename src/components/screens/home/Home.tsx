import styles from './Home.module.css';
import SearchBar from '../searchBar/SearchBar.tsx';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <SearchBar />
      </div>
    </>
  );
};

export default Home;
