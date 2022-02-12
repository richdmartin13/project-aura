import React from 'react';
import '../../App.css';
import './Navigation.css';
import { colors } from '../../config/config'
import { pages } from '../../config/sidebar';
import logo from '../../assets/images/logo.png';
import { NavLink, Outlet, useResolvedPath, useMatch, useLocation } from "react-router-dom";

export function NavBar(props) {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className='navbar-container' style={{
            backgroundColor: props.bgColor, color: props.color,
        }}>
            <h2 style={{ margin: 0, textTransform: 'capitalize' }}>{path !== '/' ? path.substring(1) : "Overview"}</h2>
            {props.children}
        </div>
    )
}

export function SideBar(props) {
    //todo: change active icons to filled
    var active;
    const tabs = pages.map((page) =>
        <Link url={page.url !== "/overview" ? page.url : '/'} key={page.url} active={active} icon={page.icon} color={props.color} activeColor={props.activeColor} />
    )

    return (
        <div>
            <nav className='sidebar-container' style={{
                // display: "flex", flexFlow: 'column nowrap',
                // alignItems: 'center', justifyContent: 'space-between',
                // padding: '16px', gap: "10px", backgroundColor: props.bgColor,
                // position: 'fixed', left: 10, top: 10, bottom: 10, width: "52px", borderRadius: "14px",
                // boxShadow: "0px 6px 12px rgba(0,0,0,0.3)"
                // display: "flex", flexFlow: 'column-reverse wrap',
                // alignItems: 'center', justifyContent: 'space-between',
                // padding: '16px', paddingTop: '20px', gap: '10px', 
                backgroundColor: props.bgColor,
                // position: 'fixed', 
                // left: 0, top: 0, bottom: 0, width: '52px',
            }}>

                <div className='sidebar-switcher'>
                    <span style={{ width: "42px", height: "42px", backgroundColor: colors.light, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img src={logo} alt="logo" style={{ width: '40px', height: '40px' }} />
                    </span>
                    <ion-icon name="chevron-up-outline" />
                </div>
                <div className='sidebar-icons'>
                    {tabs}
                </div>
                <span className='sidebar-profile' style={{
                    backgroundColor: props.color, color: props.bgColor
                }}>
                    <h4>{props.initials}</h4>
                </span>
                {props.children}
            </nav>
            <Outlet />
        </div>
    )
}

export function Link(props) {
    let resolved = useResolvedPath(props.url);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <NavLink to={props.url !== "/overview" ? props.url : '/'} key={props.url}
            style={({ isActive }) => {
                return {
                    color: isActive ? props.activeColor : props.color,
                    padding: '10px',
                    margin: '-10px',
                    borderRadius: '10px'
                };
            }}
        >
            <ion-icon name={match ? props.icon : props.icon + "-outline"} style={{ transform: "scale(1.5)" }}></ion-icon>
        </NavLink>
    )
}