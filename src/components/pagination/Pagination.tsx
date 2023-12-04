import styles from './Pagination.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';

const Pagination = () => {
  const { infoData } = useContext(DataContext);

  return (
    <section id="main-section">
      <div className={styles.pagination}>
        <h3>Number of pages</h3>
        {infoData.map((_, index: number) => (
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
