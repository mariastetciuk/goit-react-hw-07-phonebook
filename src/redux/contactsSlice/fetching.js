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

  console.log(value);

  return data;
};
