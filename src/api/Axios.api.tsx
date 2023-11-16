import axios from 'axios';

export const AxiosApi = {
  async getAll(str: string) {
    const respocne = await axios.get(
      `https://swapi.dev/api/people/?search=${str}`
    );
    console.log(`https://swapi.dev/api/people/?search=${str}`);
    return respocne.data;
  },
};
