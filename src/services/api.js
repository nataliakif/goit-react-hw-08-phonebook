import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const addContact = async ({ name, number }) => {
  const response = await axios.post('/contacts', { name, number });
  console.log(response.data);
  return response.data;
};

const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

const deleteContact = async contactId => {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
};

export { addContact, getContacts, deleteContact };
