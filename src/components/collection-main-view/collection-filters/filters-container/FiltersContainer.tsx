import React, {useState} from "react";
import "./FiltersContainer.css";

interface FiltersContainerParams {
    setColourFilterBarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    setShapeFilterBarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function FiltersContainer ({setColourFilterBarOpen, setShapeFilterBarOpen}: FiltersContainerParams) {

    const toggleColourFilterBar = () => {
        if (setColourFilterBarOpen) {
            setColourFilterBarOpen(prevState => {return !prevState});
        }
    }

    const toggleShapeFilterBar = () => {
        if (setShapeFilterBarOpen) {
            setShapeFilterBarOpen(prevState => {return !prevState});
        }
    }

    return (
        <>
            <div className={"filtersWrapper"}>
                <div className={"filtersButtonWrapper"} onClick={toggleColourFilterBar}>
                    <span>{"COLOUR"}</span>
                </div>
                <div className={"filtersButtonWrapper"} onClick={toggleShapeFilterBar}>
                    <span>{"SHAPE"}</span>
                </div>
            </div>
        </>
    )
}
