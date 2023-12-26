import {createSlice, configureStore} from '@reduxjs/toolkit';

enum Role {
  'Admin',
  'BasicUser',
  'PremiumUser',
}

interface User {
  id: number;
  name: string;
  username: string;
  bio: string;
  avatar: string;
  role: Role;
}

interface UserState {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
}

const initialState: UserState = {
  accessToken: null,
  refreshToken: null,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setAccessToken, setRefreshToken, setUser} = userSlice.actions;

export default userSlice.reducer;
