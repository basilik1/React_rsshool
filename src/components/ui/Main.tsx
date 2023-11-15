import styles from './UI.module.css';
import React from 'react';

class Main extends React.Component {
  // TODO: add props typing
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.main}>
        <h2>Results</h2>
        <div className={styles.list}>
          <ul>
            // TODO: add property sData typing
            {console.log(this.props.sData)}
            {this.props.sData.map((item, index) => {
              return (
                <li className={styles.item} key={index}>
                  <p>name: {item.name}</p>
                  <p>height: {item.height}</p>
                  <p>mass: {item.mass}</p>
                  <p>birth_year: {item.birth_year}</p>
                  <ol className={styles.film}>
                    films:
                    {
                      // TODO: add property film,index typing
                      item.films.map((film, index) => {
                        return <li key={index}>&nbsp;&nbsp;{film}</li>;
                      })
                    }
                  </ol>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;
