
/**
 * section 3, background image
 */

import React, { useState,useContext,useEffect } from "react";
import './index.css'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import { FormContext } from "./index";
import steps from '../../constant/steps'

const Index = ({}) => {
    const classes = useStyles();
    const { activeStep, setActiveStep, } = useContext(FormContext)

    const FormSubmit = () =>{
      alert('submit')
    }
    return(
        <div className={'FormSection-container'}>
            <div className={'StepSection-gap'} />
            <div className={'FormSection-content'}>
              <Button variant="contained" color="primary" className={classes.Button}
                onClick={()=>setActiveStep(activeStep-1)}
                disabled={activeStep==0}
              >
                back
              </Button>
              <Button variant="contained" color="primary" className={classes.Button}
                onClick={activeStep<steps.length-1?()=>setActiveStep(activeStep+1):FormSubmit}
              >
                {/* {steps.length} */}
                {activeStep<steps.length-1?'next':'submit'}
              </Button>
            </div>
            <div className={'FormSection-gap'} />

        </div>
    )
}
  
export default Index;

const useStyles = makeStyles((theme) => ({
    Button: {
      width:'40%',
      height:50,
      margin:'auto',
    },
}));