import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../services/api';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const contacts = await API.getContacts();
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    const contact = await API.addContact({ name, number });
    return contact;
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const contact = await axios.delete(`/contacts/${id}`);
    if (contact.status === 200) {
      return id;
    }
    return contact;
  }
);
