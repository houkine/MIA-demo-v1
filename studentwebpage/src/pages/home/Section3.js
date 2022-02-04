
/**
 * section 3, background image
 */

import React, { useState,useRef,useEffect } from "react";
import './index.css'
import background2 from '../../assert/background2.webp'
import Button from '../../component/Button'


const Index = ({}) => {

    return(
        <div className={'Section3-container'}>
            <img className={'Section3-image'} src={background2} alt={'background'}></img>
        </div>
    )
}
  
export default Index;

