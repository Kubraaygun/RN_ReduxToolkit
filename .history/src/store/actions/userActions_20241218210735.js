import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL} from '../../service/url';

const getUser = createAsyncThunk('users/getUser', async () => {
  const response = await getRequest(BASE_URL);
  return response.data;
});
export {getUsers};
