import { createSlice } from '@reduxjs/toolkit'

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    value: 0,
    sumResult:0,
    arrayValue: '',
    monthValue: 'Апрель',
    isModal: false,
    arrayInDayValue: [],
    dateCurrent: ''
  },
  reducers: {
   
    changeSumResult: (state,action) => {
    state.sumResult = action.payload.state+state.sumResult;
    console.log(state.sumResult)},
    setArrayValue: (state,action) => {
       state.arrayValue = action.payload
      },
      setIsModal: (state,action) => {
        state.isModal =  action.payload
      },
      setArrayInDay: (state,action) => {
        state.arrayInDayValue = action.payload
      },
      setDateCurrent: (state,action) =>{
        state.dateCurrent = action.payload;
      }
  
  }
})

// Action creators are generated for each case reducer function
export const {changeSumResult,setArrayValue,setIsModal,setArrayInDay,setDateCurrent } = reservationSlice.actions

export default reservationSlice.reducer