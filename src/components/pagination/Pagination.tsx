import styles from './Pagination.module.css';
import { NavLink, Outlet } from 'react-router-dom';

import { filter } from '../../redux/slices/filterSlice';
import { useSelector } from 'react-redux';

const Pagination = () => {
  const { items } = useSelector(filter);

  return (
    <section id="main-section">
      <div className={styles.pagination}>
        <h3>Number of pages</h3>
        {items.map((_, index: number) => (
          <NavLink
            to={`/page/${index + 1}`}
            className={({ isActive }) =>
              isActive
                ? `${styles.active_page_link} ${styles.page_link}`
                : `${styles.page_link}`
            }
            key={`page-${index + 1}`}
            data-testid={`pageTestid`}
          >
            {index + 1}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </section>
  );
};

export default Pagination;
