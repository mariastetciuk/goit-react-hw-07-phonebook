import axios from 'axios';

export const getAllContacts = async () => {
  const { data } = await axios.get(
    'https://648c3c498620b8bae7ec84ad.mockapi.io/contacts/'
  );
  return data;
};

export const addContact = async value => {
  const { data } = await axios.post(
    'https://648c3c498620b8bae7ec84ad.mockapi.io/contacts/',
    value
  );

  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(
    `https://648c3c498620b8bae7ec84ad.mockapi.io/contacts/${id}`
  );
  return data;
};
