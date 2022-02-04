
/**
 * section 5, buttom background image
 */

import React, { useState,useRef,useEffect } from "react";
import './index.css'
import business1 from '../../assert/business1.webp'
import business2 from '../../assert/business2.webp'
import business3 from '../../assert/business3.webp'
import Button from '../../component/Button'


const Index = ({}) => {

    return(
        <div className={'Section8-container'}>
            <img className={'Section8-image'} src={business1} alt={'background'}></img>
            <img className={'Section8-image'} src={business2} alt={'background'}></img>
            <img className={'Section8-image'} src={business3} alt={'background'}></img>
        </div>
    )
}
  
export default Index;

