
/**
 * section 6, bar
 */

import React, { useState,useRef,useEffect } from "react";
import './index.css'
import background3 from '../../assert/background3.webp'
import SectorOption from '../../component/SectorOption'

import { makeStyles } from '@material-ui/core/styles'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Index = ({}) => {
    const classes = useStyles();

    return(
        <div className={'Section6-container'}>
            <div className={'Section6-sector'}>
                <div className={'Section6-sector-head'}>Student Support</div>
                <div className={'Section6-gap'} />
                <SectorOption text={'LLN SUPPORT'} />
                <SectorOption text={'POLICIES & PROCEDURES'} />
                <SectorOption text={'FORMS'} />
                <SectorOption text={'USEFUL LINKS'} />
                <SectorOption text={'EDUCATION AGENT LIST'} />
                <SectorOption text={'DOMESTIC STUDENT'} />
                <SectorOption text={'INTERNATIONAL STUDENT'} />
            </div>
            <div className={'Section6-sector'}>
                <div className={'Section6-sector-head'}>About MIA</div>
                <div className={'Section6-gap'} />
                <SectorOption text={'ABOUT US'} />
                <SectorOption text={'INDUSTRY NETWORK'} />
                <SectorOption text={'CONTACT US'} />
                <SectorOption text={'Compliance'} />
                <SectorOption text={'Academic calendar'} />
            </div>
            <div className={'Section6-followus'}>
                <div className={'Section6-sector-head'}>Follow Us</div>
                <div className={'Section6-gap'} />
                <div className={'Section6-sector-icons'}>
                    <FacebookIcon className={classes.icon}/>
                    <InstagramIcon className={classes.icon}/>
                    <LinkedInIcon className={classes.icon}/>
                    <YouTubeIcon className={classes.icon}/>
                    <CallIcon className={classes.icon}/>
                    <EmailIcon className={classes.icon}/>
                </div>
            </div>
        </div>
    )
}
  
export default Index;

const useStyles = makeStyles((theme) => ({
    icon: {
      width:50,
      height:50,
      marginRight:20,
      marginTop:20,
      cursor:'pointer',
    },
}));