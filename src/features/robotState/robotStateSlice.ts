import { createSlice } from '@reduxjs/toolkit'

interface stateType {
  robotState: {
    afterAssignment: Boolean,
    currentRobot: any,
    currentRobotIdx: any,
    queries: any,
    filter: any,
    numSelected: any,
    isTeamMode: boolean,
    schedulableRobot: any,
    schedulableRobotIdx: any,
    selectAll: boolean
  }
}

const initialState: stateType = {
  robotState: {
    afterAssignment: false,
    currentRobot: null,
    currentRobotIdx: null,
    queries: '',
    filter: '',
    numSelected: 0,
    isTeamMode: false,
    schedulableRobot: null,
    schedulableRobotIdx: null,
    selectAll: false
  }


}

const robotStateSlice = createSlice({

  name: 'states',
  initialState,
  reducers: {
    setRobotState: (state, action) => {
      state.robotState = { ...state.robotState, ...action.payload }
    },
  },

})

export const { setRobotState } = robotStateSlice.actions
export default robotStateSlice.reducer
