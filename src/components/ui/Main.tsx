import styles from './UI.module.css';
import { FC, useEffect, useState } from 'react';
import Loader from '../loader/Loader.tsx';
import { useParams } from 'react-router-dom';
import { axiosPeople } from '../../api/Axios.api.tsx';
import CardItem from '../cardItem/cardItem.tsx';

const Main: FC = ({ data, value, first }) => {
  const { id } = useParams();
  const pageNumber = first ? 0 : id ? id - 1 : 0;
  const infoForPage = data[pageNumber];

  const [peopleUrl, setPeopleUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [peopleData, setPeopleData] = useState({});

  const handleGetCardInfo = (peopleUrl: string) => {
    setLoading(true);
    axiosPeople(peopleUrl)
      .then((results) => {
        setPeopleData(results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const handleClickListItem = (itemUrl: string) => {
    setLoading(true);
    setPeopleUrl(itemUrl);
  };

  useEffect(() => {
    if (peopleUrl) {
      handleGetCardInfo(peopleUrl);
    }
  }, [peopleUrl]);

  return (
    <section className={styles.top_main}>
      <div className={styles.sidebar}>
        <nav>
          <ul>
            {infoForPage
              .filter((obj) =>
                obj.name.toLowerCase().includes(value.toLowerCase())
              )
              .map((item) => (
                <li
                  className={styles.list}
                  key={crypto.randomUUID()}
                  onClick={() => item.url && handleClickListItem(item.url)}
                >
                  <a href="#">{item.name}</a>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div className={styles.block_card}>
        {loading ? <Loader /> : <CardItem data={peopleData} />}
      </div>
    </section>
  );
};

export default Main;
