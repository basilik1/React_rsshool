import axios from 'axios';

// export const getAxiosSearch = async (indexPages) => {
//   const respocne = await axios.get(
//     `https://swapi.dev/api/people/?page=${indexPages}`
//   );
//   console.log(`https://swapi.dev/api/people/?page=${indexPages}`);
//   return respocne.data;
// };

export const getAxiosAllPage = async (searchTerm) => {
  const results = [];

  const allAxiosPage = async (pageUrl) => {
    const response = await axios.get(pageUrl);
    const data = await response.data;
    results.push(...data.results);

    if (data.next) {
      await allAxiosPage(data.next);
    }
  };

  await allAxiosPage(`https://swapi.dev/api/people/?search=${searchTerm}`);

  return results;
};

export const chunkArray = (data, selectedLimit) => {
  const result = [];
  const count = +selectedLimit;
  for (let i = 0; i < data.length; i += count) {
    result.push(data.slice(i, i + count));
  }

  return result;
};

export const axiosPeople = async (url) => {
  const response = await axios.get(url);
  const data = await response.data;
  return data;
};
