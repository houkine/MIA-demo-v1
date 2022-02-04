/**
 * course introduce page, in popup
 */

import React, { useState,useRef,useEffect } from "react";
import './index.css'
 
const Index = ({img,name,list}) => (
    <div className={MouseIn?'Button-movein':'Button-moveout'}
        onMouseEnter={()=>setMouseIn(true)}
        onMouseLeave={()=>setMouseIn(false)}
    >{text}</div>
)
   
export default Index;