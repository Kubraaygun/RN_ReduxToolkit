import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  users: [
    {
      id: 1,
      name: 'Ahmet',
      surname: 'Siyah',
      age: 24,
      address: 'Istanbul/Kadikoy',
      phone: '55 5 32324',
      email: 'test@test.com',
    },
  ],
};
const userSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {},
  addNewUser: (state, action) => {
    state.users = [...state.users, action.payload];
  },
});

export const {addNewUser} = userSlice.actions;
export default userSlice.reducer;
