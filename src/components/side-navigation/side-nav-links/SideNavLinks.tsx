import React from 'react';
import './SideNavLinks.css';

export function SideNavLinks () {
    return (
        <div className={"sideNavLinks"}>
            <a className={"sideNavLink"} href={"/about-us"}>{"About Us"}</a>
            <a className={"sideNavLink"} href={"/pair-for-pair"}>{"Pair for Pair"}</a>
            <a className={"sideNavLink"} href={"/factories"}>{"Factories"}</a>
            <a className={"sideNavLink"} href={"/journal"}>{"Journal"}</a>
        </div>
    )
}
