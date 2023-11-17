import { useEffect, useState } from 'react';
import Header from '../../ui/Header.js';
import { AxiosApi } from '../../../api/Axios.api.tsx';
import Main from '../../ui/Main.tsx';
import { FC } from 'react';

const SearchBar: FC = () => {
  const searchValue = localStorage.getItem('searchValue');
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(searchValue || '');
  const [data, setData] = useState([]);

  useEffect(() => {
    const resData = responseAxios(value);
    setData(resData.results);
  }, []);

  const errorMessage = () => {
    console.log(`Error button`);
    throw new Error('Error message');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('searchValue', value);
    responseAxios(value);
  };

  const responseAxios = async (str: string) => {
    setIsLoading(true);

    const response = await AxiosApi.getAll(str).catch((error) => {
      console.error(error);
    });
    setData(response.results);
    setIsLoading(false);
  };

  return (
    <>
      <Header
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        loading={isLoading}
        errorClick={errorMessage}
      />
      {isLoading ? <div></div> : <Main data={data} />}
    </>
  );
};

export default SearchBar;
