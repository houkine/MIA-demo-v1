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
import EnglishLanguageProficiencySection from './EnglishLanguageProficiencySection'
import EducationAndEmploymentHistorySection from './EducationAndEmploymentHistorySection'
import CourseInformationSection from './CourseInformationSection'
import UniqueStudentIdentifierSection from './UniqueStudentIdentifierSection'
import PaymentOptionsSection from './PaymentOptionsSection'
import TermsandConditionsSection from './TermsandConditionsSection'


import steps from '../../constant/steps'

export const FormContext = createContext()

const Index = (props) => {
    const [activeStep, setActiveStep] = useState(5)
    // const [activeStep, setActiveStep] = useState(0)

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
    const [RequireMIAOSHCType, setRequireMIAOSHCType] = useState('')
    const [OSHCStartDate, setOSHCStartDate] = useState('')
    
    // ----------------English Language Proficiency
    const [EnglishFirstLanguage, setEnglishFirstLanguage] = useState('')
    const [EnglishTestTaken, setEnglishTestTaken] = useState('')

    // ----------------Education And Employment History
    const [Education1YearAttend, setEducation1YearAttend] = useState('')
    const [Education1School, setEducation1School] = useState('')
    const [Education1Qualification, setEducation1Qualification] = useState('')
    const [Education1Country, setEducation1Country] = useState('')
    const [Education2YearAttend, setEducation2YearAttend] = useState('')
    const [Education2School, setEducation2School] = useState('')
    const [Education2Qualification, setEducation2Qualification] = useState('')
    const [Education2Country, setEducation2Country] = useState('')
    const [Work1Year, setWork1Year] = useState('')
    const [Work1CompanyName, setWork1CompanyName] = useState('')
    const [Work1Position, setWork1Position] = useState('')
    const [Work2Year, setWork2Year] = useState('')
    const [Work2CompanyName, setWork2CompanyName] = useState('')
    const [Work2Position, setWork2Position] = useState('')
    const [Work3Year, setWork3Year] = useState('')
    const [Work3CompanyName, setWork3CompanyName] = useState('')
    const [Work3Position, setWork3Position] = useState('')
    const [ApplyRPLTransfer, setApplyRPLTransfer] = useState('')

    // ----------------Course InformationSection

    // ----------------Unique Student Identifier
    const [USINumber, setUSINumber] = useState('')
    const [AuthorizeMIAApplyUSINumber, setAuthorizeMIAApplyUSINumber] = useState('')


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
                // ----------------Personal Details
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
                // ----------------Visa Information
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
                // ----------------English Language Proficiency
                EnglishFirstLanguage, setEnglishFirstLanguage,
                EnglishTestTaken, setEnglishTestTaken,
                // ----------------Education And Employment History
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
                // ----------------Course InformationSection
                // ----------------Unique Student Identifier
                USINumber, setUSINumber,
                AuthorizeMIAApplyUSINumber, setAuthorizeMIAApplyUSINumber,
            }}>
                {{
                    0:<PersonalDetailsSection />,
                    1:<VisaInformationSection />,
                    2:<EnglishLanguageProficiencySection />,
                    3:<EducationAndEmploymentHistorySection />,
                    4:<CourseInformationSection />,
                    5:<UniqueStudentIdentifierSection />,
                    6:<PaymentOptionsSection />,
                    7:<TermsandConditionsSection />,
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

