import React, {useContext} from "react";
import './CollectionMainView.css'
import {CollectionHeader} from "./collection-header/CollectionHeader";
import {getSimpleCollection} from "data/apiRequests";
import {Colours, Shapes, Gender, EyewearType} from "data/CustomTypes";
import {ButtonClickContext} from "helpers/ButtonClickProvider";
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;

export function CollectionMainView () {
    // setting up default params for initial eye-wear collection api call
    const initialShape: keyof Shapes = "round";
    const initialColour: keyof Colours = 'black';
    const initialGender: keyof Gender = "men";
    const initialEyewearType: keyof EyewearType = "spectacles"

    const [shapeState, setshapeState] = React.useState(initialShape)
    const [colourState, setColourState] = React.useState(initialColour)
    const [genderState, setGenderState] = React.useState(initialGender)
    const [eyewearTypeState, setEyewearTypeState] = React.useState(initialEyewearType)
    const [initialCollectionList, setInitialCollectionList] = React.useState([]);

    const defaultSearchParams = {
        frame_type: shapeState,
        colour: colourState,
        gender: genderState,
        eyewear_type: eyewearTypeState
    }

    /*
     * Initial apiCall triggered automatically when Home component renders
     */
    React.useEffect(() => {
        dataFetch();
    }, []);

    const contextValue = useContext(ButtonClickContext);
    if (!contextValue) {
        return <div>Loading...</div>
    }
    const {clickedButton} = contextValue;
    if(contextValue) {
        console.log("clicked button: ", clickedButton)
    }

    const dataFetch = async () => {
        try {
            const data = await getSimpleCollection(defaultSearchParams);
            setInitialCollectionList(data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    }

    return (
        <div className={"collectionWrapper"}>
            <CollectionHeader type={eyewearTypeState} gender={genderState}/>
            <p>last clicked button: {clickedButton}</p>
        </div>
    )
}
