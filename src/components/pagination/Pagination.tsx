import styles from './Pagination.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { IPagination } from '../interface/interface';

const Pagination = ({ data }: IPagination) => {
  return (
    <section id="main-section">
      <div className={styles.pagination}>
        <h3>Number of pages</h3>
        {data.map((_, index: number) => (
          <NavLink
            to={`/page/${index + 1}`}
            className={({ isActive }) =>
              isActive
                ? `${styles.active_page_link} ${styles.page_link}`
                : `${styles.page_link}`
            }
            key={`page-${index + 1}`}
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
