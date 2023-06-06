import axios from 'axios';

const URL = 'http://localhost:3001/';

const getPeople = async () => {
  const response = await axios.get(URL + 'people');
  return response.data;
};

export { getPeople };
