import styles from './SelectItemPage.module.css';
import { ISelectItemPage } from '../interface/interface';
const options = [10, 20, 50, 100];

const SelectItemPage = ({ onChange, value }: ISelectItemPage) => {
  return (
    <div className={styles.select_item}>
      <h3 style={{ marginRight: 25 }}>Number of items on the page</h3>
      <select
        value={value}
        onChange={onChange}
        id="itemPage"
        data-testid="itemPage"
      >
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
