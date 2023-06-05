import { createSlice } from '@reduxjs/toolkit'

interface stateType {
  robotState: {
    afterAssignment: Boolean,
    currentRobot: any,
    currentRobotId: any,
    queries: any,
    filter: any,
    numSelected: number,
    isTeamMode: boolean,
    schedulableRobot: any,
    schedulableRobotId: any,
    selectAll: boolean
  }
}

const initialState: stateType = {
  robotState: {
    afterAssignment: false,
    currentRobot: null,
    currentRobotId: null,
    queries: '',
    filter: '',
    numSelected: 0,
    isTeamMode: false,
    schedulableRobot: null,
    schedulableRobotId: null,
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
