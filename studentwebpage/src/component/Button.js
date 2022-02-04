

import React, { useState,useRef,useEffect } from "react";
import './index.css'
 
const Index = ({text}) => {
    const [MouseIn, setMouseIn] = useState(false)
    return(
        <div className={MouseIn?'Button-movein':'Button-moveout'}
            onMouseEnter={()=>setMouseIn(true)}
            onMouseLeave={()=>setMouseIn(false)}
        >{text}</div>
    )
}
   
export default Index;