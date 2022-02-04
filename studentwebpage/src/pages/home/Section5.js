
/**
 * section 5, buttom background image
 */

import React, { useState,useRef,useEffect } from "react";
import './index.css'
import background3 from '../../assert/background3.webp'
import Button from '../../component/Button'


const Index = ({}) => {

    return(
        <div className={'Section5-container'}>
            <img className={'Section5-image'} src={background3} alt={'background'}></img>
        </div>
    )
}
  
export default Index;

