import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  users: [],
};
export const userSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {},
});
