import styles from './UI.module.css';
import { FC } from 'react';

const Main: FC = ({ data }) => {
  return (
    <section className={styles.top_main}>
      {data.map((item, index) => {
        return (
          <div className={styles.item} key={index}>
            <h2>{item.name}</h2>
            <span>Height: {item.height}</span>
            <span>Mass: {item.mass}</span>
            <span>Birth_year: {item.birth_year}</span>
          </div>
        );
      })}
    </section>
  );
};

export default Main;
