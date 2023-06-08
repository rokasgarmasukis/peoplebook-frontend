import axios from 'axios';

const baseURL = 'https://localhost:7293/api';

export default axios.create({ baseURL });
