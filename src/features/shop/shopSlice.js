import { createSlice } from '@reduxjs/toolkit'

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    value: 0,
    sumResult:0,
  },
  reducers: {
   
    changeSumResult: (state,action) => {
    state.sumResult = action.payload.state+state.sumResult;
    console.log(state.sumResult)

    



    }
  
  }
})

// Action creators are generated for each case reducer function
export const {changeSumResult } = reservationSlice.actions

export default reservationSlice.reducer