import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
const initialState = {
  users: [],
  pending: false,
  error: '',
};
const userSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.users = [...state.users, action.payload];
      Alert.alert('Kullanici basarili bir sekilde eklendi');
    },
  },
});

export const {addNewUser} = userSlice.actions;
export default userSlice.reducer;
