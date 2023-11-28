import styles from './SelectItemPage.module.css';
import { FC } from 'react';

const options = [10, 20, 50, 100];

const SelectItemPage: FC = ({ onChange, value }) => {
  return (
    <div className={styles.select_item}>
      <h3 style={{ marginRight: 25 }}>Number of elements per page</h3>
      <select value={value} onChange={onChange}>
        {options.map((elem) => (
          <option key={elem} value={elem}>
            {elem}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectItemPage;
