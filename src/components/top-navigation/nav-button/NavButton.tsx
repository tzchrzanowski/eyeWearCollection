import React, { useState, ChangeEvent } from 'react';
import './NavButton.css';

interface Props {
    name: string;
    passedAction?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NavButton ({name, passedAction}: Props) {
    /*
     * Function changes the state in parent component to reversed boolean value
     */
    const performAction = () => {
        if (passedAction) {
            passedAction((prevVal) => {
                return true;
            })
        }
    };

    return (
        <div className={"navButton"} onMouseOver={performAction}>
                <span>{name}</span>
        </div>
    )
}
