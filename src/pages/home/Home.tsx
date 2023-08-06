import React from 'react';
import './Home.css';
import {TopNavigation} from 'components/top-navigation/TopNavigation';
import {CollectionMainView} from "components/collection-main-view/CollectionMainView";
import {ButtonClickProvider} from "helpers/ButtonClickProvider";

export function Home () {


    return (
        <div className={"Home"}>
            <ButtonClickProvider>
                <TopNavigation />
                <CollectionMainView />
            </ButtonClickProvider>
        </div>
    )
}
