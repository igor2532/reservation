import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';

export const reservationSlice = createSlice({
  name: 'reservation',
  
  initialState: {
 
    monthsArray: [{month:1,title:'01-2024',text:'Январь'},{month:2,title:'02-2024',text:'Февраль'},{month:3,title:'03-2024',text:'Март'},{month:4,title:'04-2024',text:'Апрель'},
    {month:5,title:'05-2024',text:'Май'},{month:6,title:'06-2024',text:'Июнь'}
    ,{month:7,title:'07-2024',text:'Июль'},{month:8,title:'08-2024',text:'Август'},{month:9,title:'09-2024',text:'Сентябрь'},{month:10,title:'10-2024',text:'Октябрь'},
    {month:11,title:'11-2024',text:'Ноябрь'},{month:12,title:'12-2024',text:'Декабрь'}],
    currentMont: '04-2024',
    monthValue: 'Апрель',
    numberMonth:4,
    isLoaded:false,
    isLoadedDays: false,
    // localUrl: 'https://myapi-5b0f.onrender.com',
    localUrl: 'http://localhost:3001',
    value: 0,
    sumResult:0,
    arrayValue: '',
    changeArr: false,
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
     changeAdminArrayTickets: '',
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
      },
      setCurrentMonth : (state,action) => {
        state.currentMont = action.payload
      },
      setNumberMonth: (state,action) =>{
        state.numberMonth = action.payload;
      },
      setMonthValue : (state,action) => {
        state.monthValue = action.payload
      },
      setChangeAdminArrayTickets: (state,action) =>{
        state.changeAdminArrayTickets = action.payload
      },
      setChangeArr: (state,action)=> {
        state.changeArr = action.payload
      }
  
  
  }
})

// Action creators are generated for each case reducer function
export const {changeSumResult,setArrayValue,setIsModal,setArrayInDay,setDateCurrent,setValueName,
setValueEmail,setValuePhone,setCountTickets,setValueDateReservation,setIsActiveTicketTiem ,setArrayTickets,setIsValideForm,setIsLoaded,
setIsLoadedDays,setCurrentMonth,setNumberMonth,setMonthValue,setChangeAdminArrayTickets,setChangeArr} = reservationSlice.actions

export default reservationSlice.reducer