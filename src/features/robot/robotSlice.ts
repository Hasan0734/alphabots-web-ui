import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  robotsList: [],
}

const robotSlice = createSlice({

  name: 'robots',
  initialState,
  reducers: {
    setRobotsData: (state, action) => {
      state.robotsList = action.payload
    },
  },
  
})

export const { setRobotsData } = robotSlice.actions
export default robotSlice.reducer
