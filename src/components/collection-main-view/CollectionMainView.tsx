import React, {useContext} from "react";
import './CollectionMainView.css'
import {getSimpleCollection} from "data/apiRequests";
import {ButtonClickContext} from "helpers/ButtonClickProvider";
import {CollectionFileters} from "./collection-filters/CollectionFileters";
import {CollectionList} from "./collection-list/CollectionList";

export function CollectionMainView () {
    // setting up default params for initial eye-wear collection api call
    const [shapeState, setshapeState] = React.useState("round")
    const [colourState, setColourState] = React.useState("black")
    const [genderState, setGenderState] = React.useState("women")
    const [eyewearTypeState, setEyewearTypeState] = React.useState("spectacles")
    const [initialCollectionList, setInitialCollectionList] = React.useState([]);

    const dataFetch = async () => {
        try {
            const data = await getSimpleCollection({frame_type: shapeState, colour: colourState, gender: genderState, eyewear_type: eyewearTypeState});
            setInitialCollectionList(data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    }

    /*
     * Get values from context api saved by selecting category from side navigation
     */
    const contextValue = useContext(ButtonClickContext)!;
    const {eyewearTypeContext, genderTypeSelectedContext} = contextValue;

    /*
     * Initial apiCall triggered automatically when Home component renders
     */
    React.useEffect(() => {
        if(contextValue && eyewearTypeContext.length > 0 && genderTypeSelectedContext.length > 0) {
            setGenderState(genderTypeSelectedContext.toLowerCase());
            setEyewearTypeState(eyewearTypeContext.toLowerCase())
        }
        dataFetch();
    }, [eyewearTypeContext, genderTypeSelectedContext])

    return (
        <div className={"collectionWrapper"}>
            <CollectionFileters gender={genderState} eyewearType={eyewearTypeState}/>
            <CollectionList />
        </div>
    )
}
