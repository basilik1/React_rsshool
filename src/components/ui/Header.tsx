import styles from './UI.module.css';
import Loader from '../loader/Loader.tsx';
import ErrorButton from '../errorButton/ErrorButton.tsx';
import { FC } from 'react';

const Header: FC = ({
  handleChange,
  handleSubmit,
  value,
  loading,
  errorClick,
}) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className={styles.top_section}>
          <form className={styles.form}>
            <input
              className={styles.input}
              placeholder="Search..."
              type="text"
              value={value}
              onChange={handleChange}
            ></input>
            <button type="submit" onClick={handleSubmit}>
              Search
            </button>
          </form>
          <ErrorButton onClick={errorClick} />
        </section>
      )}
    </>
  );
};

export default Header;
