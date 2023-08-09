import React, {useContext, useRef} from "react";
import './CollectionMainView.css'
import {getSimpleCollection} from "data/apiRequests";
import {ButtonClickContext} from "helpers/ButtonClickProvider";
import {CollectionFileters} from "./collection-filters/CollectionFileters";
import {CollectionList} from "./collection-list/CollectionList";
import {GlassesInterface} from "data/CustomTypes";
export function CollectionMainView () {
    // states used as api params:
    const [shapeState, setShapeState] = React.useState(["round"]);
    const [colourState, setColourState] = React.useState(["black"]);
    const [genderState, setGenderState] = React.useState("women");
    const [eyewearTypeState, setEyewearTypeState] = React.useState("spectacles");
    const [pageNumberState, setPageNumberState] = React.useState(1);
    // states useful to manage logic for when to do api calls:
    type NestedGlassInterface = GlassesInterface[][];
    const [initialCollectionList, setInitialCollectionList] = React.useState<NestedGlassInterface>([]);
    const [collectionTotalCount, setCollectionTotalCount] = React.useState(0);
    const [lastLoadedPage, setLastLoadedPage] = React.useState(0);
    const [totalItemsFetched, setTotalItemsFetched] = React.useState(0);
    // component lifecycle related states:
    const [loading, setLoading] = React.useState(false);
    const sentinelRef = useRef(null);
    /*
     * Does cleanup of state parameters used when new collection is to be displayed in component.
     */
    function statesCleanup() {
        setPageNumberState(1);
        setLastLoadedPage(0);
        setInitialCollectionList([]);
        setCollectionTotalCount(0);
        setTotalItemsFetched(0);
    };
    /*
     * Responsible for fetching new data
     */
    const dataFetch = async () => {
        try {
            getSimpleCollection({frame_type: shapeState, colour: colourState, gender: genderState, eyewear_type: eyewearTypeState, page_number: pageNumberState})
                .then(data => {
                    // set collection:
                    const doubleTab = (initialCollectionList.length > 0) ? initialCollectionList : [];
                    doubleTab[pageNumberState-1] = data.glasses;
                    setInitialCollectionList(doubleTab);
                    // set state helpers:
                    setTotalItemsFetched(prevState => prevState + data.glasses.length);
                    setCollectionTotalCount(data.meta.total_count);
                    setLastLoadedPage(pageNumberState);
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
     * This will be triggered automatically whenever eyewearTypeContext or genderTypeSelectedContext are changed.
     * Those two are selected from side navigation and read here.
     * Changing states of params will render component again with new params that will trigger new api fetch call.
     * cleanup is initiated to clean states that were used by previously displayed collection.
     */
    React.useEffect(() => {
        if(contextValue && eyewearTypeContext.length > 0 && genderTypeSelectedContext.length > 0) {
            statesCleanup();
            setGenderState(genderTypeSelectedContext.toLowerCase());
            setEyewearTypeState(eyewearTypeContext.toLowerCase());
        }
    }, [eyewearTypeContext, genderTypeSelectedContext])
    /*
     * This will perform fetch call, happens whenever listed parameters change.
     * Triggers when genderState, pageNumberState or eyewearTypeState gets updated...
     */
    React.useEffect(() => {
        setLoading(true);
        dataFetch();
    }, [genderState, eyewearTypeState, pageNumberState])
    /*
     * This useEffect will be triggered by change of colour filter or shape filter
     * It needs cleanup of data because it creates a whole new collection search criteria
     */
    React.useEffect(() => {
        statesCleanup();
        setLastLoadedPage(0);
        setLoading(true);
        dataFetch();
    }, [colourState, shapeState]);
    /*
     * Used to monitor scrolling over elements and to load more collection elements when user reached bottom element
     * Will be triggered at component startup
     */
    React.useEffect(()=> {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }
        return () => {
            if(sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        };
    }, [collectionTotalCount]);
    const handleObserver = (entries: any) => {
        const entry = entries[0];
        if (entry.isIntersecting && totalItemsFetched < collectionTotalCount) {
            if (pageNumberState + 1 == lastLoadedPage + 1) {
                setPageNumberState(pageNumberState + 1);
            }
        }
    };
    return (
        <div className={"collectionWrapper"}>
            <CollectionFileters
                gender={genderState}
                eyewearType={eyewearTypeState}
                setColourState={setColourState}
                setShapeState={setShapeState}
            />
            {loading === true ?
                <div>Loading...</div>
                :
                <>
                    <CollectionList collection={initialCollectionList}/>
                    {initialCollectionList.length < collectionTotalCount && (
                        <div ref={sentinelRef}></div>
                    )}
                </>
            }
        </div>
    )
}
