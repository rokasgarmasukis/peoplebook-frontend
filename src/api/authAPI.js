import axios from './axios';

export async function register(user, headers) {
  const response = await axios.post('auth/register', user, headers);
  return response;
}
