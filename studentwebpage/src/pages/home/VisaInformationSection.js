
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
      AlreadyHaveAvisa, setAlreadyHaveAvisa,
      TypeOfVisaYouHave, setTypeOfVisaYouHave,
      TypeOfVisaYouApply, setTypeOfVisaYouApply,
      CurrentlyEnrolledWithAnotherCRICOSProvider, setCurrentlyEnrolledWithAnotherCRICOSProvider,
      RequireLetterOfOFFerReleasedByCurrentProvider, setRequireLetterOfOFFerReleasedByCurrentProvider,
      HaveALetterOfRelease, setHaveALetterOfRelease,
      OweFeesToYourPreviousProvider, setOweFeesToYourPreviousProvider,
      AbideByTheConditionsOfYourStudentVisa, setAbideByTheConditionsOfYourStudentVisa,
      ReasonLeavingYourCurrentProvider, setReasonLeavingYourCurrentProvider,
      RequireCoE, setRequireCoE,
      RequireCoEEvidence, setRequireCoEEvidence,
      LocationLodgeStudentVisaApplication, setLocationLodgeStudentVisaApplication,
    } = useContext(FormContext)


    return(
        <div className={'FormSection-container'}>
            <div className={'FormSection-gap'} />

            {/* Do you already have a visa? */}
            <div className={'FormSection-content'}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Do you already have a visa?</FormLabel>
                <RadioGroup row value={AlreadyHaveAvisa} onChange={e=>setAlreadyHaveAvisa(e.target.value)}>
                  <FormControlLabel value={'Yes'} label={'Yes'} control={<Radio color="primary" />} />
                  <FormControlLabel value={'No'} label={'No'} control={<Radio color="primary" />} />
                </RadioGroup>
              </FormControl>
            </div>
              {{
                'Yes':
                <div className={'FormSection-content'}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">If Yes, which type of visa do you have?</FormLabel>
                    <RadioGroup row value={TypeOfVisaYouHave} onChange={e=>setTypeOfVisaYouHave(e.target.value)}>
                      <FormControlLabel value={'Student'} label={'Student'} control={<Radio color="primary" />} />
                      <FormControlLabel value={'Working Holiday'} label={'Working Holiday'} control={<Radio color="primary" />} />
                      <FormControlLabel value={'Visitor'} label={'Visitor'} control={<Radio color="primary" />} />
                      <FormControlLabel value={'Dependant'} label={'Dependant'} control={<Radio color="primary" />} />
                      <FormControlLabel value={'Other'} label={'Other'} control={<Radio color="primary" />} />
                    </RadioGroup>
                    {TypeOfVisaYouHave=='Other' && 
                      <TextField className={classes.TextField} label="Address" value={TypeOfVisaYouHave} onChange={e=>setTypeOfVisaYouHave(e.target.value)} />
                    }
                  </FormControl>
                </div>,
                'No':
                <div className={'FormSection-content'}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">If No, which type of visa will you apply for?</FormLabel>
                    <RadioGroup row value={AlreadyHaveAvisa} onChange={e=>setAlreadyHaveAvisa(e.target.value)}>
                      <FormControlLabel value={'Student'} label={'Student'} control={<Radio color="primary" />} />
                      <FormControlLabel value={'No'} label={'No'} control={<Radio color="primary" />} />
                    </RadioGroup>
                  </FormControl>
                </div>,
              }[AlreadyHaveAvisa]}


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