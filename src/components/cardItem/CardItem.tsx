import { useState, useEffect } from 'react';
import styles from './CardItem.module.css';
import { IoMdClose } from 'react-icons/io';
import { Idata } from '../interface/interface';

const CardItem = ({ data }: { data: Idata }) => {
  const [showCard, setShowCard] = useState(false);
  const handleCloseCard: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShowCard(false);
  };
  useEffect(() => {
    data.name && setShowCard(true);
  }, [data.name]);

  return (
    <>
      {showCard ? (
        <div data-testid="cardItem" className={styles.card_item}>
          <div className={styles.card_info}>
            <button
              data-testid="closeBtn"
              className={styles.btn_close_item}
              onClick={handleCloseCard}
            >
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
