import axios from 'axios';

const URL = 'https://localhost:7293/api/';

const getPeople = async () => {
  const response = await axios.get(URL + 'people');
  return response.data;
};

export { getPeople };
