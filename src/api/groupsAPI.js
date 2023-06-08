import axios from "./axios";

export async function getGroups () {
  const response = await axios.get('groups');
  return response.data;
}

