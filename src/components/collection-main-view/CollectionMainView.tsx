import React from "react";
import './CollectionMainView.css'
import {CollectionHeader} from "./collection-header/CollectionHeader";

interface CollectionMainViewProps {
    gender: string;
    type: string;
}

export function CollectionMainView ({gender, type}: CollectionMainViewProps) {

    return (
        <div className={"collectionWrapper"}>
            main view
            <CollectionHeader />
        </div>
    )
}
