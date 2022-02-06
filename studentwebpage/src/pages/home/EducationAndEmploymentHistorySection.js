
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
      Education1YearAttend, setEducation1YearAttend,
      Education1School, setEducation1School,
      Education1Qualification, setEducation1Qualification,
      Education1Country, setEducation1Country,
      Education2YearAttend, setEducation2YearAttend,
      Education2School, setEducation2School,
      Education2Qualification, setEducation2Qualification,
      Education2Country, setEducation2Country,
      Work1Year, setWork1Year,
      Work1CompanyName, setWork1CompanyName,
      Work1Position, setWork1Position,
      Work2Year, setWork2Year,
      Work2CompanyName, setWork2CompanyName,
      Work2Position, setWork2Position,
      Work3Year, setWork3Year,
      Work3CompanyName, setWork3CompanyName,
      Work3Position, setWork3Position,
      ApplyRPLTransfer, setApplyRPLTransfer,
    } = useContext(FormContext)

    return(
        <div className={'FormSection-container'}>

            <div className={'FormSection-title'}>Educational History</div>
            <div className={'FormSection-content'}>High School / Tertiary / Higher Education / Senior Secondary Studies – Highest level attained:</div>
            <div className={'FormSection-gap'} />

            {/* Educational History */}
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Year attained" value={Education1YearAttend} onChange={e=>setEducation1YearAttend(e.target.value)} />
              <TextField className={classes.TextField} label="School or Institute" value={Education1School} onChange={e=>setEducation1School(e.target.value)} />
              <TextField className={classes.TextField} label="Title of qualification eg “Qld Senior Certificate”" value={Education1Qualification} onChange={e=>setEducation1Qualification(e.target.value)} />
              <TextField className={classes.TextField} label="Country" value={Education1Country} onChange={e=>setEducation1Country(e.target.value)} />
            </div>
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Year attained" value={Education2YearAttend} onChange={e=>setEducation2YearAttend(e.target.value)} />
              <TextField className={classes.TextField} label="School or Institute" value={Education2School} onChange={e=>setEducation2School(e.target.value)} />
              <TextField className={classes.TextField} label="Title of qualification eg “Qld Senior Certificate”" value={Education2Qualification} onChange={e=>setEducation2Qualification(e.target.value)} />
              <TextField className={classes.TextField} label="Country" value={Education2Country} onChange={e=>setEducation2Country(e.target.value)} />
            </div>

            <div className={'FormSection-title'}>Work Experience</div>
            <div className={'FormSection-content'}>Based on your past work, study and life experiences, applicants may be eligible for Recognition of Prior Learning (RPL), or credit transfer (CT), please contact staff for details.</div>
            <div className={'FormSection-gap'} />

            {/* Work Experience */}
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Year of Employmen" value={Work1Year} onChange={e=>setWork1Year(e.target.value)} />
              <TextField className={classes.TextField} label="Company Name" value={Work1CompanyName} onChange={e=>setWork1CompanyName(e.target.value)} />
              <TextField className={classes.TextField} label="Position / Job Duty" value={Work1Position} onChange={e=>setWork1Position(e.target.value)} />
            </div>
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Year of Employmen" value={Work2Year} onChange={e=>setWork2Year(e.target.value)} />
              <TextField className={classes.TextField} label="Company Name" value={Work2CompanyName} onChange={e=>setWork2CompanyName(e.target.value)} />
              <TextField className={classes.TextField} label="Position / Job Duty" value={Work2Position} onChange={e=>setWork2Position(e.target.value)} />
            </div>
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Year of Employmen" value={Work3Year} onChange={e=>setWork3Year(e.target.value)} />
              <TextField className={classes.TextField} label="Company Name" value={Work3CompanyName} onChange={e=>setWork3CompanyName(e.target.value)} />
              <TextField className={classes.TextField} label="Position / Job Duty" value={Work3Position} onChange={e=>setWork3Position(e.target.value)} />
            </div>

            <div className={'FormSection-title'}>RPL/Credit Transfer</div>
            <div className={'FormSection-gap'} />

            {/* Do you wish to Apply for RPL/Credit Transfer */}
            <div className={'FormSection-content'}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Do you wish to Apply for RPL/Credit Transfer:</FormLabel>
                <RadioGroup row value={ApplyRPLTransfer} onChange={e=>setApplyRPLTransfer(e.target.value)}>
                  <FormControlLabel value={'Yes'} label={'Yes'} control={<Radio color="primary" />} />
                  <FormControlLabel value={'No'} label={'No'} control={<Radio color="primary" />} />
                </RadioGroup>
              </FormControl>
            </div>
            <div className={'FormSection-content'}>If yes, MIA will contact you for further information.</div>

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