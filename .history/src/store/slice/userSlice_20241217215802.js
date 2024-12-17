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
      profilImage: '',
      gender: 'Kadin',
    },
    {
      id: 2,
      name: 'Ahmet',
      surname: 'Siyah',
      age: 24,
      address: 'Istanbul/Kadikoy',
      phone: '55 5 32324',
      email: 'test@test.com',
      profilImage: '',
      gender: 'Kadin',
    },
    {
      id: 3,
      name: 'Ahmet',
      surname: 'Siyah',
      age: 24,
      address: 'Istanbul/Kadikoy',
      phone: '55 5 32324',
      email: 'test@test.com',
      profilImage: '',
      gender: 'Kadin',
    },
    {
      id: 4,
      name: 'Ahmet',
      surname: 'Siyah',
      age: 24,
      address: 'Istanbul/Kadikoy',
      phone: '55 5 32324',
      email: 'test@test.com',
      profilImage: '',
      gender: 'Kadin',
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
