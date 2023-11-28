import { FC, useState, useEffect } from 'react';
import styles from './cardItem.module.css';
import { IoMdClose } from 'react-icons/io';

const CardItem: FC = ({ data }) => {
  const [showCard, setShowCard] = useState(false);
  const handleCloseCard = () => {
    setShowCard(false);
  };
  useEffect(() => {
    data.name && setShowCard(true);
  }, [data.name]);
  return (
    <>
      {showCard ? (
        <div className={styles.card_item}>
          <div className={styles.card_info}>
            <button className={styles.btn_close_item} onClick={handleCloseCard}>
              <IoMdClose />
            </button>
            <h3 className={styles.title}>{data.name}</h3>
            <span>Birth_year: {data.birth_year}</span>
            <span>Height: {data.height}</span>
            <span>Mass: {data.mass}</span>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default CardItem;
