import axios from 'axios';

const URL = 'https://localhost:7293/api/';

const getGroups = async () => {
  const response = await axios.get(URL + 'groups');
  return response.data;
};

export { getGroups };
