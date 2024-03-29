import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  user: any,
  roles:any[]

}
const initialState : AuthState = {
  user: undefined,
  roles: [],
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload
      state.roles = action.payload?.roles || []
    },
    userUpdate: (state, action) => {
      state.user = action.payload
      state.roles = action.payload?.roles || []
    },
    userLoggedOut: (state) => {
      state.user = undefined
      state.roles = []
    },
  },
})

export const { userLoggedIn, userLoggedOut, userUpdate } = authSlice.actions
export default authSlice.reducer
