import React, { useState, ChangeEvent } from 'react';
import './TopNavigation.css';
import BloobloomLogo from 'resources/bloobloom-logo.svg';
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
                <img src={BloobloomLogo} alt={"Bloobloom Logo"} className={"svgElement"} />
            </a>
        </div>
    )
}
