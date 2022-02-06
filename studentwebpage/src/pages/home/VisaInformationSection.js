
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
      RequireMIAOSHCType, setRequireMIAOSHCType,
      OSHCStartDate, setOSHCStartDate,

    } = useContext(FormContext)

    const [OtherTypeOfVisaHaving,setOtherTypeOfVisaHaving] = useState('')
    const HandleTypeOfVisaHavingOnClick = value =>{
      setOtherTypeOfVisaHaving(value)
      setTypeOfVisaYouHave(value)
    }

    const [TypeOfVisaApply,setTypeOfVisaApply] = useState('')
    const HandleTypeOfVisaApplyOnClick = value =>{
      setTypeOfVisaApply(value)
      setTypeOfVisaYouApply(value)
    }

    const [StudentVisaApplicationLocation,setStudentVisaApplicationLocation] = useState('')
    const HandleStudentVisaApplicationLocationOnClick = value =>{
      setStudentVisaApplicationLocation(value)
      setLocationLodgeStudentVisaApplication(value)
    }

    const [RequireOSHC,setRequireOSHC] = useState('')

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
            <div className={'FormSection-swapGroup'}>
              {{
                'Yes':
                <div className={'FormSection-content'}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">If Yes, which type of visa do you have?</FormLabel>
                    <RadioGroup row value={OtherTypeOfVisaHaving} onChange={e=>HandleTypeOfVisaHavingOnClick(e.target.value)}>
                      <FormControlLabel value={'Student'} label={'Student'} control={<Radio color="primary" />} />
                      <FormControlLabel value={'Working Holiday'} label={'Working Holiday'} control={<Radio color="primary" />} />
                      <FormControlLabel value={'Visitor'} label={'Visitor'} control={<Radio color="primary" />} />
                      <FormControlLabel value={'Dependant'} label={'Dependant'} control={<Radio color="primary" />} />
                      <FormControlLabel value={'Other'} label={'Other'} control={<Radio color="primary" />} />
                    </RadioGroup>
                    {OtherTypeOfVisaHaving=='Other' && 
                      <TextField className={classes.TextField} label="Visa Type" value={TypeOfVisaYouHave} onChange={e=>setTypeOfVisaYouHave(e.target.value)} />
                    }
                  </FormControl>
                </div>,
                'No':
                <div className={'FormSection-content'}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">If No, which type of visa will you apply for?</FormLabel>
                    <RadioGroup row value={TypeOfVisaApply} onChange={e=>HandleTypeOfVisaApplyOnClick(e.target.value)}>
                      <FormControlLabel value={'Student'} label={'Student'} control={<Radio color="primary" />} />
                      <FormControlLabel value={'Visitor'} label={'Visitor'} control={<Radio color="primary" />} />
                      <FormControlLabel value={'Dependant'} label={'Dependant'} control={<Radio color="primary" />} />
                      <FormControlLabel value={'Other'} label={'Other'} control={<Radio color="primary" />} />
                    </RadioGroup>
                    {TypeOfVisaApply=='Other' && 
                      <TextField className={classes.TextField} label="Visa Type" value={TypeOfVisaYouApply} onChange={e=>setTypeOfVisaYouApply(e.target.value)} />
                    }
                  </FormControl>
                </div>,
              }[AlreadyHaveAvisa]}
            </div>
            {/* Are you currently enrolled with another CRICOS provider? */}
            <div className={'FormSection-content'}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Are you currently enrolled with another CRICOS provider? </FormLabel>
                <RadioGroup row value={CurrentlyEnrolledWithAnotherCRICOSProvider} onChange={e=>setCurrentlyEnrolledWithAnotherCRICOSProvider(e.target.value)}>
                  <FormControlLabel value={'Yes'} label={'Yes'} control={<Radio color="primary" />} />
                  <FormControlLabel value={'No'} label={'No'} control={<Radio color="primary" />} />
                </RadioGroup>
              </FormControl>
            </div>
            {CurrentlyEnrolledWithAnotherCRICOSProvider=='Yes' && <div className={'FormSection-swapGroup'}>
                <div className={'FormSection-content'}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">If YES, do you require a Letter of Offer to be released by your current provider?</FormLabel>
                    <RadioGroup row value={RequireLetterOfOFFerReleasedByCurrentProvider} onChange={e=>setRequireLetterOfOFFerReleasedByCurrentProvider(e.target.value)}>
                      <FormControlLabel value={'Yes'} label={'Yes'} control={<Radio color="primary" />} />
                      <FormControlLabel value={'No'} label={'No'} control={<Radio color="primary" />} />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={'FormSection-content'}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Do you have a Letter of Release?</FormLabel>
                    <RadioGroup row value={HaveALetterOfRelease} onChange={e=>setHaveALetterOfRelease(e.target.value)}>
                      <FormControlLabel value={'Yes'} label={'Yes'} control={<Radio color="primary" />} />
                      <FormControlLabel value={'No'} label={'No'} control={<Radio color="primary" />} />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={'FormSection-content'}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Do you owe fees to your previous provider?</FormLabel>
                    <RadioGroup row value={OweFeesToYourPreviousProvider} onChange={e=>setOweFeesToYourPreviousProvider(e.target.value)}>
                      <FormControlLabel value={'Yes'} label={'Yes'} control={<Radio color="primary" />} />
                      <FormControlLabel value={'No'} label={'No'} control={<Radio color="primary" />} />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={'FormSection-content'}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Did you abide by the conditions of your student visa with your previous provider?</FormLabel>
                    <RadioGroup row value={AbideByTheConditionsOfYourStudentVisa} onChange={e=>setAbideByTheConditionsOfYourStudentVisa(e.target.value)}>
                      <FormControlLabel value={'Yes'} label={'Yes'} control={<Radio color="primary" />} />
                      <FormControlLabel value={'No'} label={'No'} control={<Radio color="primary" />} />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={'FormSection-content'}>
                  <TextField className={classes.TextField_left} label="State the reason of leaving your current provider:" value={ReasonLeavingYourCurrentProvider} onChange={e=>setReasonLeavingYourCurrentProvider(e.target.value)} />
                </div>
            </div>}
            
            <div className={'FormSection-title'}>Permanent Address in Home Country</div>
            <div className={'FormSection-gap'} />

            {/* Do you require a CoE to lodge your visa application? */}
            <div className={'FormSection-content'}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Do you require a CoE to lodge your visa application?</FormLabel>
                <RadioGroup row value={RequireCoE} onChange={e=>setRequireCoE(e.target.value)}>
                  <FormControlLabel value={'Yes'} label={'Yes'} control={<Radio color="primary" />} />
                  <FormControlLabel value={'No'} label={'No'} control={<Radio color="primary" />} />
                </RadioGroup>
              </FormControl>
            </div>
            {RequireCoE=='No'&& <div className={'FormSection-swapGroup'}>
              <div className={'FormSection-swapGroup-content'}>
                <TextField className={classes.TextField_left} label="please state your reason and provide supporting evidence:" value={RequireCoEEvidence} onChange={e=>setRequireCoEEvidence(e.target.value)} />
              </div>
            </div> }
            <div className={'FormSection-gap'} />

            {/* Do you require a CoE to lodge your visa application? */}
            <div className={'FormSection-content'}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Location to Lodge Student Visa Application:</FormLabel>
                <RadioGroup row value={StudentVisaApplicationLocation} onChange={e=>setStudentVisaApplicationLocation(e.target.value)}>
                  <FormControlLabel value={'Australia'} label={'Australia'} control={<Radio color="primary" />} />
                  <FormControlLabel value={'Overseas'} label={'Overseas'} control={<Radio color="primary" />} />
                </RadioGroup>
              </FormControl>
            </div>
            {StudentVisaApplicationLocation=='Overseas' && <div className={'FormSection-swapGroup'}>
              <div className={'FormSection-swapGroup-content'}>
                <TextField className={classes.TextField_left} label="please state:" value={LocationLodgeStudentVisaApplication} onChange={e=>setLocationLodgeStudentVisaApplication(e.target.value)} />
              </div>
            </div> }
            <div className={'FormSection-gap'} />

            <div className={'FormSection-title'}>Overseas Student Health Cover (OSHC)</div>
            <div className={'FormSection-gap'} />

            {/* Do you require MIA to arrange OSHC for you? */}
            <div className={'FormSection-content'}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Do you require MIA to arrange OSHC for you?</FormLabel>
                <RadioGroup row value={RequireOSHC} onChange={e=>setRequireOSHC(e.target.value)}>
                  <FormControlLabel value={'Yes'} label={'Yes'} control={<Radio color="primary" />} />
                  <FormControlLabel value={'No'} label={'No'} control={<Radio color="primary" />} />
                </RadioGroup>
              </FormControl>
            </div>
            {{
              'Yes': 
                <div className={'FormSection-swapGroup'}>
                  <div className={'FormSection-content'}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Cover Type:</FormLabel>
                      <RadioGroup row value={RequireMIAOSHCType} onChange={e=>setRequireMIAOSHCType(e.target.value)}>
                        <FormControlLabel value={'Single'} label={'Single'} control={<Radio color="primary" />} />
                        <FormControlLabel value={'Couple'} label={'Couple'} control={<Radio color="primary" />} />
                        <FormControlLabel value={'Family'} label={'Family'} control={<Radio color="primary" />} />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className={'FormSection-swapGroup-content'}>
                    <TextField className={classes.TextField_left} label="OSHC Policy Start Date" value={OSHCStartDate} onChange={e=>setOSHCStartDate(e.target.value)} />
                  </div>
                </div>,
              'No': 
                <div className={'FormSection-swapGroup'}>
                  <div className={'FormSection-swapGroup-content'}> I will arrange OSHC by myself (I understand that I am fully responsible for my own insurance)</div>
                </div>,
            }[RequireOSHC]}
            
            <div className={'FormSection-title'}>NOTE:</div>
            <div className={'FormSection-gap'} />
            <div className={'FormSection-content'}>1. Overseas Student Health Cover (OSHC) is compulsory for students on student visas. If MIA is not arranging OSHC, student must provide proof of currency.</div>
            <div className={'FormSection-content'}>2. you also need to arrange cover for your dependents</div>
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