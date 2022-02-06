
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

          <div className={'FormSection-title'}>ELICOS</div>
          <div className={'FormSection-gap'} />

          <div className={'FormSection-title'}>VET Course</div>
          <div className={'FormSection-gap'} />

          <div className={'FormSection-title'}>MIA Packaged Programs:</div>
          <div className={'FormSection-gap'} />

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