
/**
 * section 5, buttom background image
 */

import React, { useState,useRef,useEffect } from "react";
import './index.css'
import logo from '../../assert/logo.webp'
import Button from '../../component/Button'


const Index = ({}) => {

    return(
        <div className={'Section7-container'}>
            <div className={'Section7-Name'}>MIA Group&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| </div>
            <div className={'Section7-Logo'}>
                <img className={'Section7-image'} src={logo} alt={'logo'}></img>
            </div>
            <div className={'Section7-legal'}>
                <div className={'Section7-legal-item'}>QIHE Pty Ltd T/A Mastery Institute Australia © 2021.</div>
                <div className={'Section7-legal-item'}>Mastery Institute Australia  RTO No. 40813  CRICOS No. 03542A</div>
                <div className={'Section7-legal-item'}>ACN: 150 307 725</div>

            </div>
        </div>
    )
}
  
export default Index;

