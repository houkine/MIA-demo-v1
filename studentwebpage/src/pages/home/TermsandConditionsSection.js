
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

          <div className={'FormSection-title'}>A. Payment of fees - Protection of student fees (TPS)</div>
          <div className={'FormSection-content'}>Under the Tuition Protection Scheme, student visa enrolments are required to be paid as follows:</div>
          <div className={'FormSection-swapGroup-content'}>
            <ul>
              <li>For courses of 24 weeks or less, all fees must be paid before the course start date, unless otherwise agreed with MIA.</li>
              <li>For courses of 25 weeks or more, a maximum of 50% of the total tuition fees plus materials fees must be paid before the course start date. The balance will be due as per payment plan. </li>
            </ul>
          </div>
          <div className={'FormSection-content'}>The tuition assurance scheme will source similar training to allow the effected participants under this condition to complete their studies without further financial burden. </div>

          <div className={'FormSection-title'}>B. Fees and Refund Policy</div>
          <div className={'FormSection-swapGroup-content'}>
            <ul>
              <li>Tuition fees are defined as fees payable for tuition as officially published or provided by MIA’s. Course fees are tuition fees plus any enrolment fee and learning materials fee where applicable. </li>
              <li>Enrolment fee $200 is non-refundable whether you have completed your course or not.</li>
              <li>Payment in person can be made by cash, bank cheque or EFTPOS at MIA campus. Card payments incur a 1.50% surcharge.</li>
              <li>Requests to revise/change confirmation of enrolment (CoE) information such as course, commencement date, OSHC and visa lodgement location will be subject to a $100 administration fee. No charge for replacement of CoE will be made for the first change request and if initiated by MIA. Administration fee will be paid upfront before the changes of CoE is done.</li>
              <li>All refund requests must be made in writing. Student must complete “Deferral/Withdrawal of Study Form” and “MIA Refund Request Form” and hand in the paper form(s) at MIA campus reception, or email to MIA:<a href='info@mastery.edu.au'> info@mastery.edu.au</a></li>
              <li>Refunds are available under below circumstances:</li>
              <ul>
                <li>Provider Default: where MIA fails to start providing the course to the student at the location on the agreed starting day, or after the course starts but before it is completed, it ceases to be provided to the student at the location; and the student has not withdrawn from the course before the default day, student will receive TPS’s fair and equitable support. </li>
                <li>Compassionate and compelling circumstances: where a student is able to evidence legitimate hardship, which renders the student unable to complete the requirements of the training product, MIA may, at its sole discretion, offer a full or partial refund of tuition fees paid.</li>
              </ul>
              <li>Refunds are NOT available under below circumstances:</li>
              <ul>
                <li>Student default: no refund will be given if a student has given false or misleading information; fails to comply with the conditions or enrolment; is in breach of student code of conducts; is in breach of their visa requirements as imposed by Australian Government; and/or withdraws after the commencement date of the course.</li>
                <li>Government changes: where a training product has been superseded on the national register, or is otherwise amended by government regulations, MIA will negotiate with students in order to determine whether they complete their training in the original or upgraded training product.</li>
                <li>Medical issues: in cases where a student is suffering from an illness and adequate documentation being provided, the student’s enrolment may be extended for a maximum of six (6) months upon application in writing. Student remains liable for all agreed payments under the original offer and payment plan.</li>
                <li>Visa terminated or rejected: no refund is given if student’s visa is rejected due to breaches of visa conditions. If the visa application is genuine, no refund of paid course fees for course/s that have commenced. However, course fees for future courses is eligible for refund.</li>
              </ul>
              <li>For an approved refund application, refunds will be paid within 28 days (4 weeks) after receipt of a written application, all refunds will deduct the $200 enrolment fee and the $250 administration fee. The residual will be paid to student’s nominated bank account, in Australian dollars.</li>
              <li>A full refund of paid course fees will be given only if a refund request is received no less than 28 days (4 weeks) prior to commencing date. If the request is made less than 4 weeks (on or within 28 days) before the commencing date, only 80% of the paid course fees will be refunded. No refund will be given to the student if the refund request is received on or after course commencement date.</li>
              <li>Anything in the offer, and the right to make complaints and seek appeals of decisions and actions under various processes, does not remove your rights to take action under Australian Consumer Law if the Australian Consumer Law applies.</li>
            </ul>
          </div>

          <div className={'FormSection-title'}>C. Complaints and Appeals Procedure</div>
          <div className={'FormSection-content'}>MIA acknowledges that a student has the right to raise complaints or appeals and expect that every effort will be made by MIA to resolve it in accordance with this process, without prejudice or fear of reprisal or victimisation. The student has the right to present the complaint or appeal verbally or in writing.</div>
          <div className={'FormSection-content'}>If a student is dissatisfied with the outcome of the complaint or appeal at the end of the internal process, the student may wish the matter to be dealt with through an external dispute resolution process facilitated by the Overseas Students Ombudsman. A copy of the complaints and appeals process is available to all students and staffs via MIA website and is available in the Student Handbook. The information will also contain details of external authorities that students may approach.</div>

          <div className={'FormSection-title'}>D. Use of Personal Information</div>
          <div className={'FormSection-content'}>Information provided to MIA may be made available to the Commonwealth including the TPS, or State or territory authorities and agencies for quality assurance, statistical, law enforcement and tuition assurance purposes, including fulfilling the legal requirements of the ESOS Act 2000, ESOS Regulations 2019, National Code 2018 and ELICOS Standards 2018. MIA is bound to abide by the requirements of the Privacy Act (1988).</div>
          <div className={'FormSection-content'}>The Privacy Notice and Student Declaration is a statement acknowledged by a student to indicate awareness that personal information collected from the student may be used together with training activity information. The privacy statement lists the ways information about the student is held, used, disclosed and managed.</div>
          <div className={'FormSection-content'}>The following is minimum mandatory content for inclusion in a Privacy Notice and Student Declaration.</div>
          <div className={'FormSection-content'}><a href="https://www.dese.gov.au/using-site/privacy">https://www.dese.gov.au/using-site/privacy</a></div>
          <div className={'FormSection-content'}><a href="https://www.ncver.edu.au/privacy">https://www.ncver.edu.au/privacy</a></div>

          <div className={'FormSection-title'}>E. Photographs, videos, and sound recordings consent</div>
          <div className={'FormSection-content'}>MIA regularly uses photographs, videos, and sound recordings of its students in its publications, promotional, and marketing material, and on its website and on other media to the general public for the purpose of promoting MIA to the general public. MIA wishes to take and use the photographs, videos and/or sound recordings of you for the purpose above and request your consent to do so.</div>
          <div className={'FormSection-content'}>Please note that any and all rights (including copyright) in photographs, videos and/or sound recordings taken of you will belong absolutely to MIA and MIA may use such photographs, videos and/or sound recordings for promotional and marketing purposes as MIA requires.</div>
          <div className={'FormSection-content'}>By signing the enrolment, the student agrees to MIA or MIA’s staff, representative, or contractor taking, using, reproducing, publishing, and releasing the photographs, videos, and sound recordings of the student in the manner explained above and agree not to make any claim against or object to MIA’s use of such photographs, videos, and sound recordings. If you do not wish to be photographed or videotaped, please inform us in writing as soon as practicable.</div>

          <div className={'FormSection-title'}>F. Agreement between You and MIA</div>
          <div className={'FormSection-content'}>Our commitment to provision of quality courses as provided by MIA: Upon receipt of the completed offer of a place in the course and the course fee (Initial Deposit) MIA agrees to:</div>
          <ul>
            <li>provide a receipt (tax invoice);</li>
            <li>undertake a pre-enrolment interview to identify and clarify course entry requirements and client needs where applicable;</li>
            <li>confirm of the course enrolment and</li>
            <li>confirm the course commencement date;</li>
            <li>confirm the selected payment plan;</li>
            <li>provide course materials and assessments;</li>
            <li>provide a qualified trainer and assessor</li>
            <li>provide training as described in the Student Handbook</li>
            <li>provide support for special needs to the student;</li>
            <li>provide trainer and administration support to students throughout the enrolment;</li>
            <li>mark, provide feedback and results on the submitted assessment tasks;</li>
            <li>support students to achieve their goal of completion of the qualification with reasonable adjustments;</li>
            <li>issue results and a Qualification or Statement of Attainment/s upon satisfactory completion of the course requirements (if applicable).</li>
          </ul>
          <div className={'FormSection-content'}>Acceptance of course enrolment and the terms and conditions forms the agreement by the student:</div>
          <div className={'FormSection-content'}>Upon accepting the offer of a place in the course, signing the agreement and making the first tuition payment, the student acknowledges their understanding of the agreement entered into with MIA and agrees that:</div>
          <ul>
            <li>details provided on enrolment are correct;</li>
            <li>course enrolment is complete when the 1st confirmation instalment is paid and the money is deposited in the MIA account;</li>
            <li>the terms and conditions of enrolment are accepted including fees and refund policy;</li>
            <li>the course entry requirements are understood and accepted and met by the student or the student has declared support needs with MIA at the application stage and accepted the policies on support;</li>
            <li>MIA will provide the date for course commencement and this date will be known as the agreed course commencement date;</li>
            <li>Course duration is effective from the agreed course commencement date;</li>
            <li>Students are responsible for their own attendance, progress and submission of work including assessments;</li>
            <li>Students are responsible for keeping a copy of the written agreement and payment receipts as supplied by MIA;</li>
            <li>As an international student, you are required to participate in scheduled classes in accordance with course timetable to make satisfactory course progress and maintain satisfactory attendance level (over 80%). The VET Regulator, ASQA, may, at any time, require MIA to implement policies and procedures to monitor minimum attendance requirements. If you don’t meet these requirements, any breach of these conditions may result in you being reported to the Department of Home Affairs.</li>
            <li>MIA may need to reassess and shorten your course duration if you don’t attend scheduled classes</li>
            <li>Students will communicate with the trainer and administration if there are issues or barriers to completion of the course where we may able to help to support the student.</li>
            <li>Students understand that they must advise MIA within 7 days of any change in their address or contact details during their course.</li>
            <li>Student Must inform MIA to change the start date with at least 10 working days’ notice.</li>
            <li>If Students do not arrive on the scheduled start date, they should notify MIA immediately of the reason, using the Course Deferment/Cancellation Form, available from MIA website or upon request. Students in default will have their enrolment cancelled and MIA will notify the Department of Home Affairs 14 days from the original start date</li>
            <li>Orientation is a legal requirement. You must attend Orientation. Failing to do so is reportable to the Department of Home Affairs. Your Orientation date and time will be emailed to you prior to course commencement.</li>
            <li>If you have been enrolled with another provider on a student visa, you may need to provide MIA with a letter of release from that principal course provider before we can issue your CoE.</li>
            <li>As an international student, you are required to maintain your enrolment, the Department of Home Affairs may cancel your student visa if you fail to maintain your enrolment.</li>
          </ul>
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