import React, {useContext} from "react";
import './CollectionMainView.css'
import {CollectionHeader} from "./collection-header/CollectionHeader";
import {getSimpleCollection} from "data/apiRequests";
import {Colours, Shapes, Gender, EyewearType} from "data/CustomTypes";
import {ButtonClickContext} from "helpers/ButtonClickProvider";

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
    const dataFetch = async () => {
        try {
            const data = await getSimpleCollection(defaultSearchParams);
            setInitialCollectionList(data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    }

    /*
     * Initial apiCall triggered automatically when Home component renders
     */
    React.useEffect(() => {
        dataFetch();
    }, []);

    /*
     * Get values from context api saved by selecting category from side navigation
     */
    const contextValue = useContext(ButtonClickContext);
    if (!contextValue) {
        // safe check for context api
        return <div>Loading...</div>
    }
    const {eyewearTypeContext, genderTypeSelectedContext} = contextValue;

    return (
        <div className={"collectionWrapper"}>
            <CollectionHeader type={eyewearTypeState} gender={genderState}/>
            <p>last clicked button: {eyewearTypeContext} {genderTypeSelectedContext}</p>
        </div>
    )
}
