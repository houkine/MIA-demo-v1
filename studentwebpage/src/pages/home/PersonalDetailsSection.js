
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
      Title, setTitle, 
      Gender, setGender,
      FamilyName, setFamilyName,
      GivenNames, setGivenNames,
      DateofBirth, setDateofBirth,
      CountryOfBirth, setCountryOfBirth,
      Mobile, setMobile,
      Email, setEmail,
      AddressInAustralia, setAddressInAustralia,
      PostalAddress, setPostalAddress,
      HomeCountryAddress, setHomeCountryAddress,
      HomeCountry, setHomeCountry,
      HomeCountryMobile, setHomeCountryMobile,
      EmergencyContactName, setEmergencyContactName,
      EmergencyContactRelationship, setEmergencyContactRelationship,
      EmergencyContactMobile, setEmergencyContactMobile,
      EmergencyContactEmail, setEmergencyContactEmail,
      EmergencyContactAddress, setEmergencyContactAddress,
    } = useContext(FormContext)


    return(
        <div className={'FormSection-container'}>
            <div className={'FormSection-gap'} />

            {/* title */}
            <div className={'FormSection-content'}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Title</FormLabel>
                <RadioGroup row name="Title" value={Title} onChange={e=>setTitle(e.target.value)}>
                  {List.TitleList.map((item,index)=>(
                    <FormControlLabel value={item} label={item} control={<Radio color="primary" />} />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

            {/* Gender */}
            <div className={'FormSection-content'}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup row name="Gender" value={Gender} onChange={e=>setGender(e.target.value)}>
                  {List.GenderList.map((item,index)=>(
                    <FormControlLabel value={item} label={item} control={<Radio color="primary" />} />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

            {/* Name */}
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Family Name" value={FamilyName} onChange={e=>setFamilyName(e.target.value)} />
              <TextField className={classes.TextField} label="Given Names" value={GivenNames} onChange={e=>setGivenNames(e.target.value)} />
            </div>

            {/* Date of Birth */}
            <div className={'FormSection-content'}>
              <TextField label="Date of Birth" type="date" className={classes.dateform}
                value={DateofBirth} onChange={e=>setDateofBirth(e.target.value)}
                InputLabelProps={{shrink: true,}}
              />
            </div>

            {/* Country of Birth, Mobile/Phone */}
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Country of Birth" value={CountryOfBirth} onChange={e=>setCountryOfBirth(e.target.value)} />
              <TextField className={classes.TextField} label="Mobile/Phone" value={Mobile} onChange={e=>setMobile(e.target.value)} />
            </div>

            {/* E-mail* */}
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="E-mail" value={Email} onChange={e=>setEmail(e.target.value)} />
            </div>

            {/* Address in Australia */}
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Address in Australia" value={AddressInAustralia} onChange={e=>setAddressInAustralia(e.target.value)} />
            </div>

            {/* Postal Address (if applicable) */}
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Postal Address (if applicable)" value={PostalAddress} onChange={e=>setPostalAddress(e.target.value)} />
            </div>

            <div className={'FormSection-title'}>Permanent Address in Home Country</div>
            <div className={'FormSection-gap'} />

            {/* Address */}
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Address" value={HomeCountryAddress} onChange={e=>setHomeCountryAddress(e.target.value)} />
            </div>

            {/* Country of Birth, Mobile/Phone */}
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Country" value={HomeCountry} onChange={e=>setHomeCountry(e.target.value)} />
              <TextField className={classes.TextField} label="Mobile/Phone" value={HomeCountryMobile} onChange={e=>setHomeCountryMobile(e.target.value)} />
            </div>

            <div className={'FormSection-title'}>Emergency Contact in Australia (if known)</div>
            <div className={'FormSection-gap'} />

            {/* Name, Relationship */}
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Name" value={EmergencyContactName} onChange={e=>setEmergencyContactName(e.target.value)} />
              <TextField className={classes.TextField} label="Relationship" value={EmergencyContactRelationship} onChange={e=>setEmergencyContactRelationship(e.target.value)} />
            </div>

            {/* Mobile/Phone, E-mail */}
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Country" value={EmergencyContactMobile} onChange={e=>setEmergencyContactMobile(e.target.value)} />
              <TextField className={classes.TextField} label="Mobile/Phone" value={EmergencyContactEmail} onChange={e=>setEmergencyContactEmail(e.target.value)} />
            </div>

            {/* Address */}
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Address" value={EmergencyContactAddress} onChange={e=>setEmergencyContactAddress(e.target.value)} />
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