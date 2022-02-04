
/**
 * section 2, drop down sections
 */

import React, { useState,useRef,useEffect } from "react";
import './index.css'
import background2 from '../../assert/background2.webp'

import Popup from 'reactjs-popup'

const Index = ({}) => {
    const [OurCoursesMouseIn, setOurCoursesMouseIn] = useState(false)
    const [StudyMouseIn, setStudyMouseIn] = useState(false)
    const [UniversityPathwaysMouseIn, setUniversityPathwaysMouseIn] = useState(false)
    const [InternationalStudentsMouseIn, setInternationalStudentsMouseIn] = useState(false)

    return(
        <div className={'Section2-container'}>
            <div className={'Section2-buttonGap'} />
            {/* ------------------------------------------------------------ Our courses */}
            <Popup
                trigger={
                    <div className={OurCoursesMouseIn?'Section2-button-movein':'Section2-button-moveout'}> Our Courses </div>
                }
                position="bottom left"
                on="hover"
                onOpen={()=>setOurCoursesMouseIn(true)}
                onClose={()=>setOurCoursesMouseIn(false)}
                arrow={false}
                nested
            >
                <div className="Section2-dropdownList">
                    <OurCourseDropDownItem />
                </div>
            </Popup>
            {/* ------------------------------------------------------------ Study */}
            <Popup
                trigger={
                    <div className={StudyMouseIn?'Section2-button-movein':'Section2-button-moveout'}> Study </div>
                }
                position="bottom left"
                on="hover"
                onOpen={()=>setStudyMouseIn(true)}
                onClose={()=>setStudyMouseIn(false)}
                arrow={false}
            >
                <div className="Section2-dropdownList">
                    <div className="Section2-dropdownItem">&nbsp;&nbsp;About the Institiute</div>
                </div>
            </Popup>
            {/* ------------------------------------------------------------ University Pathways */}
            <div className={UniversityPathwaysMouseIn?'Section2-button-movein':'Section2-button-moveout'}
                onMouseEnter={()=>setUniversityPathwaysMouseIn(true)}
                onMouseLeave={()=>setUniversityPathwaysMouseIn(false)}
            > University Pathways </div>
            {/* ------------------------------------------------------------ International Students */}
            <div className={InternationalStudentsMouseIn?'Section2-button-movein':'Section2-button-moveout'}
                onMouseEnter={()=>setInternationalStudentsMouseIn(true)}
                onMouseLeave={()=>setInternationalStudentsMouseIn(false)}
            > International Students </div>
        </div>
    )
}
  
export default Index;

const OurCourseDropDownItem = ({options}) =>{
    return(
        <Popup
            trigger={
                <div className="Section2-dropdownItem">&nbsp;&nbsp;item 1</div>
            }
            position="right top"
            on="hover"
            arrow={false}
            nested
        >
            <div className="Section2-course">
                &nbsp;&nbsp;item 1
            </div>
        </Popup>
    )
}

