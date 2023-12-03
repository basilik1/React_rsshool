import ErrorButton from '../errorButton/ErrorButton.tsx';
import SelectItemPage from '../selectItemPage/SelectItemPage.tsx';
import styles from './UI.module.css';
import { IHeaderComponent } from '../interface/interface.ts';

const Header = ({
  limitValue,
  value,
  onChange,
  errorClick,
  onSelectChange,
  onSubmit,
}: IHeaderComponent) => {
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
            <button type="submit" className={styles.btn_search}>
              Search
            </button>
          </form>
          <ErrorButton onClick={errorClick} />
        </div>
        <SelectItemPage value={limitValue} onChange={onSelectChange} />
      </section>
    </>
  );
};

export default Header;
