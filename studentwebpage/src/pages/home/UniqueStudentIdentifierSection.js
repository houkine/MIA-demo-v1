
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
      AuthorizeMIAApplyUSINumber, setAuthorizeMIAApplyUSINumber,
    } = useContext(FormContext)

    const [HaveUSINumber, setHaveUSINumber] = useState('')
    const HandleEnglishTestOnClick = value =>{
      setHaveUSINumber(value)
      setUSINumber(value)
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
          {{
            'Yes':
              <div className={'FormSection-swapGroup'}>
                <div className={'FormSection-swapGroup-content'}>
                  <TextField className={classes.TextField_left} label="please provide:" value={USINumber} onChange={e=>setUSINumber(e.target.value)} />
                </div>
              </div>,
            'No':
              <div className={'FormSection-swapGroup'}>
                <div className={'FormSection-gap'} />
                <div className={'FormSection-font'}>
                 If ‘NO’ or unknown, you may apply online via the government website&nbsp;
                 <a href="https://www.usi.gov.au/students/create-your-usi">https://www.usi.gov.au/students/create-your-usi</a>&nbsp;
                 OR you can authorize MIA to apply USI on your behalf:&nbsp;
                </div>
                <div className={'FormSection-content'}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">I do not have a USI (Unique Student Identifier) and authorize MIA to apply pursuant to sub-section 9(2) of the Student Identifiers Act 2014, for a USI on my behalf. </FormLabel>
                    <RadioGroup row value={AuthorizeMIAApplyUSINumber} onChange={e=>setAuthorizeMIAApplyUSINumber(e.target.value)}>
                      <FormControlLabel value={'Yes'} label={'Yes'} control={<Radio color="primary" />} />
                      <FormControlLabel value={'No'} label={'No'} control={<Radio color="primary" />} />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={'FormSection-font'}>
                  I have read and consent to the collection, use and disclosure of my personal information pursuant to the information detailed at&nbsp;<a href="https://www.usi.gov.au/about-us/privacy">https://www.usi.gov.au/about-us/privacy</a>
                </div>
              </div>,
          }[HaveUSINumber]}
          <div className={'FormSection-content'}>I understand that MIA will provide to the Registrar the following items of personal information:</div>
          <ul>
            <li>My name, including first or given names(s), middle name(s)</li>
            <li>and surname or family name as they appear in an identification document.</li>
            <li>My date of birth as it appears, if shown, in the chosen document of identity</li>
            <li>My city or town of birth / My country of birth</li>
            <li>My gender and contact details</li>
          </ul>

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