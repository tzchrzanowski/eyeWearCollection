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
                <NavButton name={"FREE EYE TEST"}/>
                <NavButton name={"ABOUT US"}/>
            </div>
            <a href={"/"} className={"navLogo"}>
                <img src={BloobloomLogo} alt={"Bloobloom Logo"} className={"svgElement"} />
            </a>
            <div className={"navButtons"}>
                <NavButton name={"HELP"}/>
                <NavButton name={"LOG IN"}/>
                <NavButton name={"BAG (0)"}/>
            </div>
        </div>
    )
}
