import React from 'react';
import '../../App.css';
import { colors } from '../../config/config'
import { pages } from '../../config/sidebar';
import logo from '../../assets/images/logo.png';
import { NavLink, Outlet, useResolvedPath, useMatch } from "react-router-dom";

export function NavBar(props) {
    return (
        <div style={{ display: "flex", flexFlow: "row nowrap", alignItems: 'center', justifyContent: 'flex-end', width: '96%', padding: '2%', gap: "10px" }}>
            {props.children}
        </div>
    )
}

export function SideBar(props) {
    //todo: change active icons to filled
    var active;
    const tabs = pages.map((page) =>
        // <NavLink to={page.url !== "/overview" ? page.url : '/'} key={page.url}
        //     style={({ isActive }) => {
        //         return {
        //             color: isActive ? props.activeColor : props.color,
        //             padding: '10px',
        //             margin: '-10px',
        //             borderRadius: '10px'
        //         };
        //     }}
        // >
        //     <ion-icon name={active ? page.icon : page.icon + "-outline"} style={{ transform: "scale(1.5)" }}></ion-icon>
        // </NavLink>
        <Link url={page.url !== "/overview" ? page.url : '/'} key={page.url} active={active} icon={page.icon} color={props.color} activeColor={props.activeColor}/>
    )

    return (
        <div>
            <nav style={{
                display: "flex", flexFlow: 'column nowrap',
                alignItems: 'center', justifyContent: 'space-between',
                padding: '16px', gap: "10px", backgroundColor: props.bgColor,
                position: 'fixed', left: 10, top: 10, bottom: 10, width: "52px", borderRadius: "14px",
                boxShadow: "0px 6px 12px rgba(0,0,0,0.3)"
            }}>
                <div style={{ display: "flex", flexFlow: "column nowrap", alignItems: "center", justifyContent: "flex-start", gap: "6px" }}>
                    <span style={{ width: "42px", height: "42px", backgroundColor: colors.light, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img src={logo} alt="logo" style={{ width: '40px', height: '40px' }} />
                    </span>
                    <ion-icon name="chevron-down-outline" />
                </div>
                <div style={{ display: "flex", flexFlow: 'column wrap', gap: "32px" }}>
                    {tabs}
                </div>
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