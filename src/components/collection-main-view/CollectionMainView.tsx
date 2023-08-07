import React, {useContext} from "react";
import './CollectionMainView.css'
import {getSimpleCollection} from "data/apiRequests";
import {ButtonClickContext} from "helpers/ButtonClickProvider";
import {CollectionFileters} from "./collection-filters/CollectionFileters";
import {CollectionList} from "./collection-list/CollectionList";
import {GlassesInterface} from "data/CustomTypes";

export function CollectionMainView () {
    // setting up default params for initial eye-wear collection api call
    const [shapeState, setshapeState] = React.useState("round")
    const [colourState, setColourState] = React.useState("black")
    const [genderState, setGenderState] = React.useState("women")
    const [eyewearTypeState, setEyewearTypeState] = React.useState("spectacles")
    const [initialCollectionList, setInitialCollectionList] = React.useState<GlassesInterface[]>([]);
    const [loading, setLoading] = React.useState(false);

    const dataFetch = async () => {
        try {
            getSimpleCollection({frame_type: shapeState, colour: colourState, gender: genderState, eyewear_type: eyewearTypeState})
                .then(data => {
                    console.log("api triggered", genderState, eyewearTypeState)
                    setInitialCollectionList(data.glasses);
                    setLoading(false);
                });
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
            setEyewearTypeState(eyewearTypeContext.toLowerCase());
        }
    }, [eyewearTypeContext, genderTypeSelectedContext])

    React.useEffect(() => {
        setLoading(true);
        dataFetch();
    }, [genderState, eyewearTypeState])

    return (
        <div className={"collectionWrapper"}>
            <CollectionFileters gender={genderState} eyewearType={eyewearTypeState}/>
            {loading === true ?
                <div>Loading...</div>
                :
                <CollectionList collection={initialCollectionList}/>
            }
        </div>
    )
}
