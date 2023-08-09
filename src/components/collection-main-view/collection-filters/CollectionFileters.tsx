import React from "react";
import "./CollectionFilters.css"
import {FiltersContainer} from "./filters-container/FiltersContainer";
import {ColourFilterBar} from "./filters-container/colour-filter-bar/ColourFilterBar";
import {ShapeFilterBar} from "./filters-container/shape-filter-bar/ShapeFilterBar";

interface CollectionFiltersProps {
    gender: string;
    eyewearType: string;
    setColourState: React.Dispatch<React.SetStateAction<string[]>>;
    setShapeState: React.Dispatch<React.SetStateAction<string[]>>;
}

export function CollectionFileters({gender, eyewearType, setColourState, setShapeState}: CollectionFiltersProps) {
    const [colourFilterBarVisible, setColourFilterBarVisible] = React.useState(false);
    const [shapeFilterBarVisible, setShapeFilterBarVisible] = React.useState(false);
    const genderUpperCase = gender.toUpperCase();
    const eyewearTypeUpperCase = eyewearType.toUpperCase();

    return (
        <>
            <div className={"collectionFiltersWrapper"}>
                <div></div>
                <div className={"headerCaption"}>
                    <span>{eyewearTypeUpperCase} {genderUpperCase}</span>
                </div>
                <FiltersContainer
                    setColourFilterBarOpen={setColourFilterBarVisible}
                    setShapeFilterBarOpen={setShapeFilterBarVisible}
                />
            </div>
            <ColourFilterBar
                colourFilterBarVisible={colourFilterBarVisible}
                setColourStateForParent={setColourState}
            />
            <ShapeFilterBar
                shapeFilterBarVisible={shapeFilterBarVisible}
                setShapeStateForParent={setShapeState}
            />
        </>
    );
}
