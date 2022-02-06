
/**
 * section 3, background image
 */

import React, { useState,useContext,useEffect } from "react";
import './index.css'
import { FormContext } from "./index";

import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl'

import List from '../../constant'

const Index = ({}) => {
    const classes = useStyles();

    const { 
      USINumber, setUSINumber,
    } = useContext(FormContext)

    const [HaveUSINumber, setHaveUSINumber] = useState('')
    const HandleEnglishTestOnClick = value =>{
      setEnglishTest(value)
      setEnglishTestTaken(value)
    }

    return(
        <div className={'FormSection-container'}>

          <div className={'FormSection-content'}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Do you have a USI Number?</FormLabel>
              <RadioGroup row value={HaveUSINumber} onChange={e=>setHaveUSINumber(e.target.value)}>
                <FormControlLabel value={'Yes'} label={'Yes'} control={<Radio color="primary" />} />
                <FormControlLabel value={'No'} label={'No'} control={<Radio color="primary" />} />
              </RadioGroup>
            </FormControl>
          </div>

        </div>
    )
}
  
export default Index;

const useStyles = makeStyles((theme) => ({
  TextField: {
    flex:1,
    marginLeft:20,
  },
  TextField_left: {
    flex:1,
  },
  formControl: {
    flex:1,
    minWidth: 120,
  },
  dateform: {
    width:'100%',
  },
}));