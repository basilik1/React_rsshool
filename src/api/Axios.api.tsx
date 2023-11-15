import axios from 'axios';

export const AxiosApi = {
  async getAll(str: string) {
    const respocne = await axios.get(`https://swapi.dev/api/people/${str}`);
    console.log(`https://swapi.dev/api/people/${str}`);
    return respocne;
  },
};
