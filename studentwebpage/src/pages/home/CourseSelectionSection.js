
/**
 * section 3, background image
 */

import React, { useState,useRef,useEffect } from "react";
import './index.css'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const Index = ({}) => {
    const classes = useStyles();
    const [YourPreferredProgram,setYourPreferredProgram] = useState('')
    const [PreferredCampus,setPreferredCampus] = useState('')
    const [PreferredCommencementMonth,setPreferredCommencementMonth] = useState('')
    const [AcademicCreditNotRequired,setAcademicCreditNotRequired] = useState('')
    const [PayInEqualQuarterlyInstalments,setPayInEqualQuarterlyInstalments] = useState('')
    return(
        <div className={'FormSection-container'}>
            <div className={'FormSection-title'}>Course Selection</div>
            <div className={'FormSection-gap'} />
            <div className={'FormSection-content'}>
              <FormControl variant="filled" className={classes.TextField_left}>
                <InputLabel id="demo-simple-select-filled-label">Your Preferred Program</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={YourPreferredProgram}
                    onChange={e=>setYourPreferredProgram(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Diploma of Remedial Massage(Hobat Campus)</MenuItem>
                    <MenuItem value={2}>Short Course: Resin Jewellery Making</MenuItem>
                    <MenuItem value={3}>Short Course: Designer PVC Tote Bag</MenuItem>
                    <MenuItem value={4}>Diploma of Community Services</MenuItem>
                    <MenuItem value={5}>Short Course: Fashion Design for Beginners</MenuItem>
                    <MenuItem value={6}>Diploma of Applied Fashion Design and Merchandising</MenuItem>
                    <MenuItem value={7}>Diploma of Project Management</MenuItem>
                    <MenuItem value={8}>Advanced Diploma of Business</MenuItem>
                    <MenuItem value={9}>Advanced Diploma of Hospitality Management</MenuItem>
                    <MenuItem value={10}>Diploma of Leadership and Management</MenuItem>
                    <MenuItem value={11}>General English</MenuItem>
                    <MenuItem value={12}>Graduate Diploma of Strategic Leadership</MenuItem>
                    <MenuItem value={13}>Graduate Diploma of Management (Learning)</MenuItem>
                    <MenuItem value={14}>Certificate II in Skills for Work and Vocational Pathways</MenuItem>
                    <MenuItem value={15}>Certificate I in Skills for Vocational Pathways</MenuItem>
                    <MenuItem value={16}>Advanced Diploma of Translating</MenuItem>
                    <MenuItem value={17}>Diploma of Remedial Massage (Brisbane Campus)</MenuItem>
                    <MenuItem value={18}>Advanced Diploma of Leadership and Management</MenuItem>
                    <MenuItem value={19}>Certificate IV in Ageing Support</MenuItem>
                  </Select>
              </FormControl>
              <FormControl variant="filled" className={classes.TextField}>
                <InputLabel id="demo-simple-select-filled-label">Preferred Campus</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={PreferredCampus}
                    onChange={e=>setPreferredCampus(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Brisbane Eight Mile Plains Campus</MenuItem>
                    <MenuItem value={2}>Hobart (Tasmania) Campus</MenuItem>
                  </Select>
              </FormControl>
              <FormControl variant="filled" className={classes.TextField}>
                <InputLabel id="demo-simple-select-filled-label">Preferred Commencement Month</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={PreferredCommencementMonth}
                    onChange={e=>setPreferredCommencementMonth(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>January</MenuItem>
                    <MenuItem value={2}>February</MenuItem>
                    <MenuItem value={3}>March</MenuItem>
                    <MenuItem value={4}>April</MenuItem>
                    <MenuItem value={5}>May</MenuItem>
                    <MenuItem value={6}>June</MenuItem>
                    <MenuItem value={7}>July</MenuItem>
                    <MenuItem value={8}>August</MenuItem>
                    <MenuItem value={9}>September</MenuItem>
                    <MenuItem value={10}>October</MenuItem>
                    <MenuItem value={11}>November</MenuItem>
                    <MenuItem value={12}>December</MenuItem>
                  </Select>
              </FormControl>
            </div>
            <div className={'FormSection-content'}>
              <FormControl variant="filled" className={classes.TextField_left}>
                <InputLabel id="demo-simple-select-filled-label">Academic credit not required</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={AcademicCreditNotRequired}
                    onChange={e=>setAcademicCreditNotRequired(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Academic credit not required (default)</MenuItem>
                    <MenuItem value={2}>I am applying for Academic Credit</MenuItem>
                  </Select>
              </FormControl>
              <FormControl variant="filled" className={classes.TextField}>
                <InputLabel id="demo-simple-select-filled-label">Pay in equal quarterly instalments</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={PayInEqualQuarterlyInstalments}
                    onChange={e=>setPayInEqualQuarterlyInstalments(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Pay in equal quarterly instalments (default)</MenuItem>
                    <MenuItem value={2}>Pay by semester (6 monthly instalments)</MenuItem>
                    <MenuItem value={3}>Pay in full in advance</MenuItem>
                    <MenuItem value={4}>Pay minimum deposit* and instalments (*terms & fees apply)</MenuItem>
                  </Select>
              </FormControl>
            </div>
            <div className={'FormSection-content'}>
                <TextField className={classes.TextField_left} label="Please note any additional courses you wish to addd or package." variant="filled" />
            </div>
            <div className={'FormSection-content'}>Please note: Not all courses are available at all campuses. Please check the course page for details.</div>
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
}));