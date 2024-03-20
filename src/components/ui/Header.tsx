import ErrorButton from '../errorButton/ErrorButton.tsx';
import SelectItemPage from '../selectItemPage/SelectItemPage.tsx';
import styles from './UI.module.css';

import { useSelector } from 'react-redux';

import {
  setSearchValue,
  // setSearchRequest,
  setSelectedLimit,
  selectValues,
} from '../../redux/slices/searchSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store.ts';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const valueInput = localStorage.getItem('valueInputSearch') || '';
  const { searchValue } = useSelector(selectValues);

  const errorMessage = () => {
    console.log(`Error button`);
    throw new Error('Error message');
  };

  const onSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('valueInputSearch', e.target.value);
    dispatch(setSearchValue(e.target.value));
    console.log(e.target.value);
  };
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedLimit(e.target.value));
    navigate('/');
  };
  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(setSearchRequest(''));
    localStorage.setItem('valueInputSearch', searchValue);
    navigate('/');
  };
  return (
    <>
      <section className={styles.top_section}>
        <div className={styles.search}>
          <form
            autoComplete="off"
            className={styles.form}
            onSubmit={onSearchSubmit}
          >
            <input
              className={styles.input}
              placeholder="Search..."
              type="text"
              value={valueInput}
              onChange={onSearchValue}
            ></input>
            <button type="submit" className={styles.btn_search}>
              Search
            </button>
          </form>
          <ErrorButton onClick={errorMessage} />
        </div>
        <SelectItemPage onChange={onSelectChange} />
      </section>
    </>
  );
};

export default Header;
