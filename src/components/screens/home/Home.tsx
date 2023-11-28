import { useEffect, useState, FC } from 'react';
import { chunkArray, getAxiosAllPage } from '../../../api/Axios.api.tsx';
import Header from '../../ui/Header.tsx';
import Main from '../../ui/Main.tsx';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Pagination from '../../pagination/Pagination.tsx';
import Loader from '../../loader/Loader.tsx';

const Home: FC = () => {
  const savedSearchRequest = localStorage.getItem('searchRequest');
  const savedLimitRequest = localStorage.getItem('selectedLimit');
  const valueInput = localStorage.getItem('valueInputSearch');
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState(savedSearchRequest || '');
  const [searchRequest, setSearchRequest] = useState(savedSearchRequest || '');
  const [selectedLimit, setSelectedLimit] = useState(savedLimitRequest || '10');
  const [isLoading, setIsLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    if (!initialLoad) {
      axiosResults(searchRequest);
    } else {
      setInitialLoad(false);
    }
  }, [initialLoad, searchRequest]);

  useEffect(() => {
    localStorage.setItem('valueInputSearch', '');
    localStorage.setItem('selectedLimit', selectedLimit.toString());
    if (selectedLimit !== savedLimitRequest) {
      axiosResults(searchRequest);
    }
  }, [selectedLimit, savedLimitRequest]);

  const axiosResults = (searchTerm) => {
    setIsLoading(true);
    localStorage.setItem('searchRequest', searchTerm);
    getAxiosAllPage(searchTerm)
      .then((res) => {
        const chunkedData = chunkArray(res, selectedLimit);
        setInfoData(chunkedData);
        setIsLoading(false);
      })
      .catch((err) => console.warn(err));
  };

  const errorMessage = () => {
    console.log(`Error button`);
    throw new Error('Error message');
  };

  const onSearchValue = (e) => {
    setSearchValue(e.target.value);
    localStorage.setItem('valueInputSearch', e.target.value);
  };
  const onSelectChange = (e) => {
    setSelectedLimit(e.target.value);
    navigate('/');
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    setSearchRequest(searchValue);
    localStorage.setItem('valueInputSearch', '');
    navigate('/');
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header
            onChange={onSearchValue}
            onSubmit={onSearchSubmit}
            onSelectChange={onSelectChange}
            value={searchValue}
            errorClick={errorMessage}
            limitValue={selectedLimit}
          />
          {infoData.length > 0 ? (
            <Routes>
              <Route path="/" element={<Pagination data={infoData} />}>
                <Route
                  index
                  element={<Main data={infoData} first value={valueInput} />}
                />
                <Route
                  path="page/:id"
                  element={
                    <Main data={infoData} first={false} value={valueInput} />
                  }
                ></Route>
              </Route>
            </Routes>
          ) : (
            <h2 className="no_result">No results</h2>
          )}
        </>
      )}
    </>
  );
};

export default Home;
