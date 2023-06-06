import axios from 'axios';

const URL = 'https://localhost:7293/api/';

export async function getGroups () {
  const response = await axios.get(URL + 'groups');
  return response.data;
}

