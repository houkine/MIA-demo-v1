import React, { useState,useRef,useEffect } from "react";
import './index.css'

import IconButton from '@material-ui/core/IconButton'
import DraftsIcon from '@material-ui/icons/Drafts'
import PersonIcon from '@material-ui/icons/Person'
import { makeStyles } from '@material-ui/core/styles'

const Index = ({}) => {
    const classes = useStyles();

    return(
        <div className={'header-container'}>
            <div className={'header-contract'} >
                <IconButton className={classes.icon1} aria-label="add an alarm"
                    onClick={()=>{}}
                >
                    <DraftsIcon />
                </IconButton>
                <div className={'header-font'} >CONTRACT</div>
            </div>
            <div className={'header-login'} >
                <div className={'header-font'} >STUDENT LOGIN</div>
                <IconButton className={classes.icon2} aria-label="add an alarm"
                    onClick={()=>{}}
                >
                    <PersonIcon />
                </IconButton>
            </div>
        </div>
    )
}
  
export default Index;


const useStyles = makeStyles({
    icon1: {
      height:30,
      width:30,
      color:'#ffffff',
      margin:'auto',
      marginTop:3,
    },
    icon2: {
      height:30,
      width:30,
      color:'#ffffff',
      margin:'auto',
    },
});