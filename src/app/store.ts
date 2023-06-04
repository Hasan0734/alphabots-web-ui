import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './../features/api/apiSlice'
import authReducer from './../features/auth/authSlice'
import globalSlice from './../features/global/globalSlice'
import userReducer from './../features/user/userSlice'
import robotReducer from '../features/robot/robotSlice'
import stateReducer from '../features/robotState/robotStateSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    user: userReducer,
    robot: robotReducer,
    global: globalSlice,
    robotState: stateReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMIddlewares:any) =>
    getDefaultMIddlewares().concat(apiSlice.middleware),
})
