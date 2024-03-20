import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { cardItem } from '../../utils/cardItem.tsx';
import CardItem from '../cardItem/CardItem.tsx';
import Loader from '../loader/Loader.tsx';

import { IMainComponent, Idata } from '../interface/interface.ts';
import styles from './UI.module.css';
import { filter } from '../../redux/slices/filterSlice.tsx';
import { useSelector } from 'react-redux';

const Main = ({ value, first }: IMainComponent) => {
  const { items } = useSelector(filter);

  const { id } = useParams();
  const pageNumber = first ? 0 : id ? +id - 1 : 0;
  const infoForPage: Idata[] = items[pageNumber];

  const [peopleUrl, setPeopleUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [peopleData, setPeopleData] = useState({});

  const handleGetCardInfo = (peopleUrl: string) => {
    setLoading(true);
    cardItem(peopleUrl)
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
              .filter(
                (item) => item.name?.toLowerCase().includes(value.toLowerCase())
              )
              .map((item) => (
                <li
                  className={styles.list}
                  key={crypto.randomUUID()}
                  onClick={(e) =>
                    (item.url && handleClickListItem(item.url)) ||
                    e.preventDefault()
                  }
                >
                  <a href="#">{item.name}</a>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div className={styles.block_card}>
        {loading ? (
          <div className={styles.loader}>
            <Loader />
          </div>
        ) : (
          <CardItem data={peopleData} />
        )}
      </div>
    </section>
  );
};

export default Main;
