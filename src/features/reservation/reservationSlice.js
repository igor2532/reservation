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
    dateCurrent: '',
//forms inputs
    valueName:'',
    valuePhone: '',
    valueEmail: '',
    countTickets: 0,
    isActiveTicketTiem: 0,
    //for insert
    
    valueDateReservation: '',
  //for admin
     arrayTickets : []
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
      },
      //inputs
      setValueName: (state,action) => {
      state.valueName = action.payload
      },
      setValueEmail: (state,action) => {
        state.valueEmail = action.payload
      },
      setValuePhone: (state,action) => {
        state.valuePhone = action.payload
      },
      setCountTickets: (state,action) => {
        state.countTickets = action.payload
      },
      setValueDateReservation: (state,action) => {
        state.valueDateReservation = action.payload
      },
      setIsActiveTicketTiem: (state,action) => {
        state.isActiveTicketTiem = action.payload
      },
      setArrayTickets: (state,action) => {
        state.arrayTickets = action.payload
      }
      
  
  }
})

// Action creators are generated for each case reducer function
export const {changeSumResult,setArrayValue,setIsModal,setArrayInDay,setDateCurrent,setValueName,
setValueEmail,setValuePhone,setCountTickets,setValueDateReservation,setIsActiveTicketTiem ,setArrayTickets} = reservationSlice.actions

export default reservationSlice.reducer