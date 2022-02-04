import React, { useState,useRef,useEffect,useContext,createContext } from "react";
import './index.css'

import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

import Header from './Header'
import Section1 from './Section1'
import Section3 from './Section3'
import Section4 from './Section4'
import CourseSelectionSection from './CourseSelectionSection'
import UploadDocumentsSection from './UploadDocumentsSection'
import StepSection from './StepSection'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'

import PersonalDetailsSection from './PersonalDetailsSection'
import VisaInformationSection from './VisaInformationSection'


import steps from '../../constant/steps'

export const FormContext = createContext()

const Index = (props) => {
    const [activeStep, setActiveStep] = useState(0)

    // ----------------Personal Details
    const [Title, setTitle] = useState('')
    const [Gender, setGender] = useState('')
    const [FamilyName, setFamilyName] = useState('')
    const [GivenNames, setGivenNames] = useState('')
    const [DateofBirth, setDateofBirth] = useState('')
    const [CountryOfBirth, setCountryOfBirth] = useState('')
    const [Mobile, setMobile] = useState('')
    const [Email, setEmail] = useState('')
    const [AddressInAustralia, setAddressInAustralia] = useState('')
    const [PostalAddress, setPostalAddress] = useState('')
    const [HomeCountryAddress, setHomeCountryAddress] = useState('')
    const [HomeCountry, setHomeCountry] = useState('')
    const [HomeCountryMobile, setHomeCountryMobile] = useState('')
    const [EmergencyContactName, setEmergencyContactName] = useState('')
    const [EmergencyContactRelationship, setEmergencyContactRelationship] = useState('')
    const [EmergencyContactMobile, setEmergencyContactMobile] = useState('')
    const [EmergencyContactEmail, setEmergencyContactEmail] = useState('')
    const [EmergencyContactAddress, setEmergencyContactAddress] = useState('')

    // ----------------Visa Information
    const [AlreadyHaveAvisa, setAlreadyHaveAvisa] = useState('')
    const [TypeOfVisaYouHave, setTypeOfVisaYouHave] = useState('')
    const [TypeOfVisaYouApply, setTypeOfVisaYouApply] = useState('')
    const [CurrentlyEnrolledWithAnotherCRICOSProvider, setCurrentlyEnrolledWithAnotherCRICOSProvider] = useState('')
    const [RequireLetterOfOFFerReleasedByCurrentProvider, setRequireLetterOfOFFerReleasedByCurrentProvider] = useState('')
    const [HaveALetterOfRelease, setHaveALetterOfRelease] = useState('')
    const [OweFeesToYourPreviousProvider, setOweFeesToYourPreviousProvider] = useState('')
    const [AbideByTheConditionsOfYourStudentVisa, setAbideByTheConditionsOfYourStudentVisa] = useState('')
    const [ReasonLeavingYourCurrentProvider, setReasonLeavingYourCurrentProvider] = useState('')
    const [RequireCoE, setRequireCoE] = useState('')
    const [RequireCoEEvidence, setRequireCoEEvidence] = useState('')
    const [LocationLodgeStudentVisaApplication, setLocationLodgeStudentVisaApplication] = useState('')



    return(
        <div className={'home-container'}>
            <Header />
            <Section1 />
            <Section3 />
            <Section4 />

            {/* switch bar */}
            <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
            </Stepper>

            {/* switch bar */}
            <FormContext.Provider value={{ 
                activeStep, setActiveStep,
                // Personal Details
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
                // Visa Information
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
            }}>
                {{
                    0:<PersonalDetailsSection />,
                    1:<VisaInformationSection />,
                }[activeStep]}
                <StepSection />
            </FormContext.Provider>

            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
        </div>
    )
}
  
export default Index;

