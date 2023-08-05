import React from "react";
import "./SideNavFooter.css"

export function SideNavFooter() {
    return (
        <div className={"sideNavFooter"}>
            <a href={"/login"} className={"sideNavFooterButton"}>{"LOGIN"}</a>
            <a href={"/help"} className={"sideNavFooterButton"}>{"HELP"}</a>
        </div>
    )
}
