import styles from './UI.module.css';
import React from 'react';

class Main extends React.Component {
  render() {
    const { sData } = this.props;
    return (
      <section className={styles.top_main}>
        {sData.length > 0 ? (
          sData.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <h2>{item.name}</h2>
                <span>Height: {item.height}</span>
                <span>Mass: {item.mass}</span>
                <span>Birth_year: {item.birth_year}</span>
              </div>
            );
          })
        ) : (
          <h2>Error, data not found</h2>
        )}
      </section>
    );
  }
}

export default Main;
