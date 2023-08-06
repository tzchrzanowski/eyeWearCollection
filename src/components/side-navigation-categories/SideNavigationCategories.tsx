import React from "react";
import './SideNavigationCategories.css';
import 'components/side-navigation/SideNavigation.css'
import {CategoryButton} from "../side-navigation/category-button/CategoryButton";

interface SideNavCatProps {
    isOpen: boolean;
    categoryType: string;
    setSideNavCategoryOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    setSideNavOpenAction?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SideNavigationCategories ({isOpen, categoryType, setSideNavCategoryOpen, setSideNavOpenAction}: SideNavCatProps) {

    const performCloseSideNavCategory = (val: boolean) => {
        if (setSideNavCategoryOpen) {
            setSideNavCategoryOpen((prevVal) => {
                return val;
            })
        }
    };

    return (
        <div
            className={(isOpen == true) ? "sideNavigationCategoriesWrapper sideNavigation sideNavigationOpen" : "sideNavigationCategoriesWrapper sideNavigation"}
            onMouseLeave={()=> {performCloseSideNavCategory(false)}}
        >
            {categoryType}
            <CategoryButton
                caption={"GO BACK"}
                reversed={true}
                setSideNavCategoryOpen={setSideNavCategoryOpen}
                setSideNavOpenAction={setSideNavOpenAction}
            />
            <CategoryButton caption={"SPECTACLES"} />
            <CategoryButton caption={"SUNGLASSES"} />
        </div>
    )
}
