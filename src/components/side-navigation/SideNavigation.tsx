import React, { useState, ChangeEvent } from 'react';
import './SideNavigation.css';
import {CategoryButton} from "./category-button/CategoryButton";
import {SideNavLinks} from "./side-nav-links/SideNavLinks";
import {SideNavFooter} from "./side-nav-footer/SideNavFooter";
import {SideNavigationCategories} from "../side-navigation-categories/SideNavigationCategories";

interface SideNavProps {
    isOpen?: boolean
    setSideNavOpenAction?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SideNavigation ({isOpen, setSideNavOpenAction}: SideNavProps) {
    const [isSideNavCatOpen, setSideNavCatOpen] = useState(false);
    const [sideNavCatType, setSideNavCatType] = useState('');

    /*
    * Function changes the state in parent component to reversed boolean value
    */
    const performCloseSideNavAction = (val: boolean) => {
        if (setSideNavOpenAction) {
            setSideNavOpenAction((prevVal) => {
                return val;
            })
        }
    };

    return (
        <>
            <SideNavigationCategories
                isOpen={isSideNavCatOpen}
                categoryType={sideNavCatType}
                setSideNavCategoryOpen={setSideNavCatOpen}
                setSideNavOpenAction={setSideNavOpenAction}
            />
            <div
                className={(isOpen == true) ? "sideNavigation sideNavigationOpen" : "sideNavigation"}
                onMouseLeave={()=> {performCloseSideNavAction(false)}}
            >
                <CategoryButton
                    caption={"WOMEN"}
                    hasSubSection={true}
                    setSideNavCategoryType={setSideNavCatType}
                    setSideNavCategoryOpen={setSideNavCatOpen}
                />
                <CategoryButton
                    caption={"MEN"}
                    hasSubSection={true}
                    setSideNavCategoryType={setSideNavCatType}
                    setSideNavCategoryOpen={setSideNavCatOpen}
                />
                <CategoryButton caption={"HOME TRY ON"} />
                <CategoryButton caption={"FREE EYE TEST"} />
                <SideNavLinks />
                <SideNavFooter />
            </div>
        </>
    );
}
