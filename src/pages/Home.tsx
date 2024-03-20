import { useEffect, FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { chunkArray } from '../utils/chunkArray.tsx';
import Header from '../components/ui/Header.tsx';
import Main from '../components/ui/Main.tsx';
import Pagination from '../components/pagination/Pagination.tsx';
import Loader from '../components/loader/Loader.tsx';
import { fetchAllPage, selectCardData } from '../redux/slices/cardSlice.tsx';
import { setItems, filter } from '../redux/slices/filterSlice';
import { selectValues } from '../redux/slices/searchSlice';

import { useAppDispatch } from '../redux/store.ts';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const valueInput = localStorage.getItem('valueInputSearch');

  const { searchRequest, selectedLimit, savedLimitRequest } =
    useSelector(selectValues);

  const { status } = useSelector(selectCardData);
  const { items } = useSelector(filter);

  useEffect(() => {
    if (status === 'loading') {
      axiosResults(searchRequest);
    }
    localStorage.setItem('valueInputSearch', '');
    localStorage.setItem('selectedLimit', selectedLimit.toString());

    if (selectedLimit !== savedLimitRequest) {
      axiosResults(searchRequest);
    }
  }, [selectedLimit, savedLimitRequest]);

  const axiosResults = (searchTerm: string) => {
    localStorage.setItem('searchRequest', searchTerm);
    console.log();
    dispatch(
      fetchAllPage({
        searchTerm,
      })
    )
      .then((res) => {
        const chunkedData = chunkArray(res.payload, selectedLimit);
        dispatch(setItems(chunkedData));
      })
      .catch((err) => console.warn(err));
  };

  return (
    <>
      {status !== 'success' ? (
        <Loader />
      ) : (
        <>
          <Header />
          {items.length !== 0 ? (
            <Routes>
              <Route path="/" element={<Pagination />}>
                <Route
                  index
                  element={<Main first value={valueInput ? valueInput : ''} />}
                />
                <Route
                  path="page/:id"
                  element={
                    <Main first={false} value={valueInput ? valueInput : ''} />
                  }
                ></Route>
              </Route>
            </Routes>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default Home;
