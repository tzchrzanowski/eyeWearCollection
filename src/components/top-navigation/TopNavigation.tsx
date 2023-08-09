import React, { useState } from 'react';
import './TopNavigation.css';
import SnowIcon from 'resources/snow-icon.svg';
import {NavButton} from "./nav-button/NavButton";
import {SideNavigation} from "../side-navigation/SideNavigation";

export function TopNavigation () {
    const [isSideNavOpen, setSideNavOpen] = useState(false);

    return (
        <div className={"topNavigation"}>
            <SideNavigation
                isOpen={isSideNavOpen}
                setSideNavOpenAction={setSideNavOpen}
            />
            <div className={"navButtons"}>
                <NavButton name={"MENU"} passedAction={setSideNavOpen} />
            </div>
            <a href={"/"} className={"navLogo"}>
                <img src={SnowIcon} alt={"Logo"} className={"svgElement"} />
            </a>
        </div>
    )
}
