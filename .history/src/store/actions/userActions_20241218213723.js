import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL} from '../../service/url';

const getUsers = createAsyncThunk('users/getUsers', async () => {
  const response = await getRequest(BASE_URL);
  console.log(reponse);
  return response.data;
});
export {getUsers};
