import { createSlice } from '@reduxjs/toolkit'

export const shopSlice = createSlice({
  name: 'shop',
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
export const {changeSumResult } = shopSlice.actions

export default shopSlice.reducer