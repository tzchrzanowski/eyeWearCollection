import React from 'react';
import './Home.css';
import {TopNavigation} from 'components/top-navigation/TopNavigation';
import {CollectionMainView} from "components/collection-main-view/CollectionMainView";
import {getSpectaclesMen} from "data/apiRequests";
import {Colours, Shapes, Gender, EyewearType} from "data/CustomTypes";

export function Home () {
    const [list, setList] = React.useState([]);

    // setting up default params for initial eye-wear collection api call
    const roundShape: keyof Shapes = "round";
    const blackColour: keyof Colours = 'black';
    const men: keyof Gender = "men";
    const spectaclesType: keyof EyewearType = "spectacles"

    const defaultSearchParams = {
        frame_type: roundShape,
        colour: blackColour,
        gender: men,
        eyewear_type: spectaclesType
    }

    const dataFetch = async () => {
        try {
            const data = await getSpectaclesMen(defaultSearchParams);
            setList(data);
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

    return (
        <div className={"Home"}>
            <TopNavigation />
            <CollectionMainView gender={"women"} type={"spectacles"} />
        </div>
    )
}
