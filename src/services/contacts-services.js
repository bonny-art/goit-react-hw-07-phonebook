import { CONTACTS_ENDPOINT, BASE_URL } from 'constants';
import axios from 'axios';

axios.defaults.baseURL = BASE_URL;

export const getAllContacts = async () => {
  const { data } = await axios.get(CONTACTS_ENDPOINT);

  return data;
};

export const postContact = async contact => {
  const { data } = await axios.post(
    CONTACTS_ENDPOINT,
    JSON.stringify(contact),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`${CONTACTS_ENDPOINT}/${id}`);

  return data;
};
