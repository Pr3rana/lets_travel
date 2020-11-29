import React, {useState, useRef} from 'react';
import logo from '../../assets/logo.svg'
import './header.scss'
import grid_view_icon from  '../../assets/grid-view-icon.svg'
import list_view_icon from  '../../assets/list-view-icon.svg'
import menu from  '../../assets/menu.svg'

function DesktopHeader({handleClick}){
    return(
        <div id = "header-container">
             <h1>Discover great places to visit</h1>
             <div className = "togglebtn">
                <span id = "grid" className = "active"><img src={grid_view_icon} /></span>
                <span id = "list"><img src={list_view_icon} /></span>
            </div>
        </div>
    )
}

function MobileHeader({toggleClick, type}){
    return(
        <div id = "mobile-header">
            <span className='headingIcon'><img src={logo} alt="icon image" /></span>
            <span className='menuIcon'><img src={menu} alt="icon image" /></span>
            {/* <h1 className = ".discover-great-place">Discover great places to visit</h1> */}
            <p className = ".discover-great-place">Discover great places to visit</p>
            <div className = "togglebtn-mobile"  onClick = {toggleClick(type)}>
            {/* onClick={(event)=>HandleToggle(event)} */}
                <span className = {type === 'grid'?'active':''}><img src={grid_view_icon} /></span>
                <span className = {type === 'list'?'active':''}><img src={list_view_icon} /></span>
            </div>
        </div>
    )
}

function HeaderGenerator({type, click, viewType}){
    if(type === "mobile"){
        return <MobileHeader toggleClick = {click} type = {viewType} />
    }
    else if(type === "desktop"){
        return <DesktopHeader toggleClick = {click}  type = {viewType} />
    }
}

export default HeaderGenerator
