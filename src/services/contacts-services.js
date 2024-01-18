import { CONTACTS_ENDPOINT, BASE_URL } from 'constants';
import axios from 'axios';

axios.defaults.baseURL = BASE_URL;

export const getAllContacts = async () => {
  const { data } = await axios.get(CONTACTS_ENDPOINT);

  return data;
};
