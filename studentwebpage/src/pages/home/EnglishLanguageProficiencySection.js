
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
      EnglishFirstLanguage, setEnglishFirstLanguage,
      EnglishTestTaken, setEnglishTestTaken,
    } = useContext(FormContext)

    const [EnglishTest,setEnglishTest] = useState('')
    const HandleEnglishTestOnClick = value =>{
      setEnglishTest(value)
      setEnglishTestTaken(value)
    }

    return(
        <div className={'FormSection-container'}>
            <div className={'FormSection-gap'} />

            {/* Is English your first language? */}
            <div className={'FormSection-content'}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Is English your first language?</FormLabel>
                <RadioGroup row name="Title" value={EnglishFirstLanguage} onChange={e=>setEnglishFirstLanguage(e.target.value)}>
                  <FormControlLabel value={'Yes'} label={'Yes'} control={<Radio color="primary" />} />
                  <FormControlLabel value={'No'} label={'No'} control={<Radio color="primary" />} />
                </RadioGroup>
              </FormControl>
            </div>

             {/* English Test Taken */}
             <div className={'FormSection-content'}>
              <FormControl component="fieldset">
                <FormLabel component="legend">English Test Taken （within 2 years）:</FormLabel>
                <RadioGroup row value={EnglishTest} onChange={e=>HandleEnglishTestOnClick(e.target.value)}>
                  <FormControlLabel value={'IELTS'} label={'IELTS'} control={<Radio color="primary" />} />
                  <FormControlLabel value={'TOFEL'} label={'TOFEL'} control={<Radio color="primary" />} />
                  <FormControlLabel value={'Others'} label={'Others'} control={<Radio color="primary" />} />
                </RadioGroup>
              </FormControl>
            </div>
            {EnglishTest=='Others' && <div className={'FormSection-swapGroup'}>
              <div className={'FormSection-swapGroup-content'}>
                <TextField className={classes.TextField_left} label="please state:" value={EnglishTestTaken} onChange={e=>setEnglishTestTaken(e.target.value)} />
              </div>
            </div> }

            
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