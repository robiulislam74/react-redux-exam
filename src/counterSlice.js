import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 10,
  },
  reducers: {
  
    addAdditionNumber: (state,action)=>{
        state.value += action.payload
    },
    addSubtractionNumber: (state,action)=>{
        state.value -= action.payload
    },
    addMultiplicationNumber: (state,action)=>{
        state.value *= action.payload
    },
    addDivisionNumber: (state,action)=>{
        state.value /= action.payload
    },
  },
})

export const { addAdditionNumber,addSubtractionNumber,addMultiplicationNumber,addDivisionNumber } = counterSlice.actions

export default counterSlice.reducer