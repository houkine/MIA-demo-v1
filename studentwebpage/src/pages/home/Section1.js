
/**
 * section 1, logo image and buttons
 */

import React, { useState,useRef,useEffect } from "react";
import './index.css'
import logo from '../../assert/logo.webp'
import Button from '../../component/Button'


const Index = ({}) => {

    return(
        <div className={'Section1-container'}>
            <img className={'Section1-logo'} src={logo} alt={'logo'}></img>
            <div className={'Section1-buttonArea'} >
                <Button text={'Enquire'}/>
                <div className={'Section1-buttonGap'}></div>
                <Button text={'Apply'}/>
            </div>
        </div>
    )
}
  
export default Index;

