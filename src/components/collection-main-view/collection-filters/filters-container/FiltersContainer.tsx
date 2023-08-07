import React, {useState} from "react";
import "./FiltersContainer.css";

export function FiltersContainer () {
    const [toggleKnob, setToggleKnob] = useState(true);

    function toggleKnobState() {
        setToggleKnob((prevState) => {
            return !prevState;
        })
    }

    return (
        <div className={"filtersWrapper"}>
            <div className={"filtersButtonWrapper"}>
                <span>{"COLOUR"}</span>
            </div>
            <div className={"filtersButtonWrapper"}>
                <span>{"SHAPE"}</span>
            </div>
        </div>
    )
}
