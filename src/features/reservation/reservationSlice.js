import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    isLoaded:false,
    isLoadedDays: false,
    localUrl: 'https://myapi-5b0f.onrender.com',
    // localUrl: 'http://localhost:3001',
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
    countTickets: 1,
    isActiveTicketTiem: 0,
    //for insert
    
    valueDateReservation: '',
  //for admin
     arrayTickets : [],
     isValideForm: false,
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
      },
      setIsValideForm: (state,action) => {
        state.isValideForm = action.payload
      },
      setIsLoaded: (state,action) => {
        state.isLoaded = action.payload
      },
      setIsLoadedDays: (state,action) => {
        state.isLoadedDays = action.payload
      }
  
  }
})

// Action creators are generated for each case reducer function
export const {changeSumResult,setArrayValue,setIsModal,setArrayInDay,setDateCurrent,setValueName,
setValueEmail,setValuePhone,setCountTickets,setValueDateReservation,setIsActiveTicketTiem ,setArrayTickets,setIsValideForm,setIsLoaded,
setIsLoadedDays} = reservationSlice.actions

export default reservationSlice.reducer