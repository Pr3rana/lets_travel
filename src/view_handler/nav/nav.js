import React, { useState, useRef } from 'react';
import './nav.scss'
import logo from '../../assets/logo.svg'
import gear from '../../assets/gear.svg'
import home from '../../assets/home.svg'
import briefcase from '../../assets/briefcase.svg'
import log_out from '../../assets/log-out.svg'
import bell from '../../assets/bell.svg'
import compass from '../../assets/compass.svg'


function DesktopNav() {
    return (
        <div className='nav' id='defaultNav'>
            <span className='headingIcon'><img src={logo} alt="icon image" /></span>
            <div className='navItem'>
                <span className='navIcon active'><img src={home} alt="icon image" /></span>
                <span className='navIcon'><img src={briefcase} alt="icon image" /></span>
                <span className='navIcon'><img src={compass} alt="icon image" /></span>
                <div className='navIcon'>
                    <img src={bell} alt="icon image" />
                    <span className="notify"/>
                </div>
                <span className='navIcon'><img src={gear} alt="icon image" /></span>
            </div>
            <span className='logout'><img src={log_out} alt="icon image" /></span>
        </div>
    )
}

function MobileNav() {
    return (
        <div className='nav' id="mobileNav" >
           <div className='navIcon'>
                <img src={bell} alt="icon image" />
                <span className="notify"/>
            </div>
            <span className='navIcon'><img src={briefcase} alt="icon image" /></span>
            <span className='navIcon active'><img src={home} alt="icon image" /></span>
            <span className='navIcon'><img src={compass} alt="icon image" /></span>
            <span className='navIcon'><img src={gear} alt="icon image" /></span>
        </div>
    )
}

function NavGenerator({ type }) {
    if (type === 'desktop') {
        return <DesktopNav />
    }
    else if (type === 'mobile') {
        return <MobileNav />
    }
    else {
        return
    }
}
export default NavGenerator
