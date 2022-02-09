
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

          <div className={'FormSection-content'}>Payment methods include: </div>
          <div className={'FormSection-swapGroup-content'}>
            <ul>
              <li>1. Telegraphic Transfer, Direct Deposit: bank details are provided in below, please notify MIA of your payment after you paid</li>
              <li>2. Cash Payment: ONLY accepted at MIA Reception</li>
              <li>3. Payment in person can be made by cash, bank cheque or EFTPOS at MIA campus. Card payments incur a 1.50% surcharge.</li>
            </ul>
          </div>

          <div className={'FormSection-font'}><b>Account Name:</b>&nbsp;QIHE Pty Ltd</div>
          <div className={'FormSection-font'}><b>Bank:</b>&nbsp;Commonwealth Bank of Australia</div>
          <div className={'FormSection-font'}><b>BSB:</b>&nbsp;064 162</div>
          <div className={'FormSection-font'}><b>Account Number:</b>&nbsp;1134 4005</div>
          <div className={'FormSection-font'}><b>SWIFT Code:</b>&nbsp;CTBAAU2S400</div>
          <div className={'FormSection-font'}><b>Bank Address:</b>&nbsp;Sunnybank Plaza Shopping Centre Main Road Sunnybank QLD Australia 4109</div>

          <div className={'FormSection-content'}>Please use Full Name of the Applicant as reference</div>

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