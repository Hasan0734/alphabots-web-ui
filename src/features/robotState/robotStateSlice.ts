import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  robotsList: [],
}

const robotStateSlice = createSlice({

  name: 'states',
  initialState,
  reducers: {
    setRobotsData: (state, action) => {
      state.robotsList = action.payload
    },
  },
  
})

export const { setRobotsData } = robotStateSlice.actions
export default robotStateSlice.reducer
