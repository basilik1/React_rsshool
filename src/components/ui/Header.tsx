import styles from './UI.module.css';
import ErrorButton from '../errorButton/ErrorButton.tsx';
import { FC } from 'react';
import SelectItemPage from '../selectItemPage/SelectItemPage.tsx';

const Header: FC = ({
  onChange,
  value,
  errorClick,
  limitVaue,
  onSelectChange,
  onSubmit,
}) => {
  return (
    <>
      <section className={styles.top_section}>
        <div className={styles.search}>
          <form autoComplete="off" className={styles.form} onSubmit={onSubmit}>
            <input
              className={styles.input}
              placeholder="Search..."
              type="text"
              value={value}
              onChange={onChange}
            ></input>
            <button type="submit" className={styles}>
              Search
            </button>
          </form>
          <ErrorButton onClick={errorClick} />
        </div>
        <SelectItemPage value={limitVaue} onChange={onSelectChange} />
      </section>
    </>
  );
};

export default Header;
