import axios from 'axios';

export const getAllContacts = async () => {
  const { data } = await axios.get(
    'https://648c3c498620b8bae7ec84ad.mockapi.io/contacts/'
  );
  return data;
};

export const addContact = async (name, phone) => {
  await axios.post(
    'https://648c3c498620b8bae7ec84ad.mockapi.io/contacts/',
    JSON.stringify(name, phone)
  );

  // const { data } = await axios.get(
  //   'https://648c3c498620b8bae7ec84ad.mockapi.io/contacts/'
  // );
  // return data;
};
