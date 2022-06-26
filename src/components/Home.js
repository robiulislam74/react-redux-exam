import React, { useState } from 'react'
import { TextField,Button} from '@mui/material'
import { addAdditionNumber,addSubtractionNumber,addMultiplicationNumber,addDivisionNumber } from '../counterSlice'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  
const [value,setValue] = useState("")
const valueConvert = Number(value)

  const dispatch = useDispatch();
  const counterNumber = useSelector((state)=>state.counter.value)
  return (
  <>
    <h1 style={{marginLeft: 100}}>{counterNumber}</h1>
    <TextField
    id="demo-helper-text-aligned-no-helper"
    label="Number"
    style={{marginBottom: 10, marginLeft: 10}}
    onChange={(e)=> setValue(e.target.value)}
    /> 
    <br/>
    <Button style={{marginRight:5}} onClick={()=>dispatch((addAdditionNumber(valueConvert)))}  variant="contained" color="success" href="#contained-buttons">
     +
    </Button> 

    <Button  style={{marginRight:5}} onClick={()=>dispatch((addSubtractionNumber(valueConvert)))}  variant="contained"  color="warning" href="#contained-buttons">
     -
    </Button> 

    <Button  style={{marginRight:5}} onClick={()=>dispatch((addMultiplicationNumber(valueConvert)))}  variant="contained" color="secondary" href="#contained-buttons">
     *
    </Button>

    <Button onClick={()=>dispatch((addDivisionNumber(valueConvert)))}   variant="contained" href="#contained-buttons">
     /
    </Button> 
  </>
  )
}

export default Home