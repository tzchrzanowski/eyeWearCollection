import React from "react";
import "./CollectionHeader.css"

export function CollectionHeader () {
    return (
        <div className={"collectionHeader"}>
            <img
                className="collectionImage"
                src="https://d2dfxgvsonxq0d.cloudfront.net/assets/Bloobloom-Collection_page-Women_s_Spectacles-Left.jpg?w=1600"
                alt="Image"
            />
            <img
                className="collectionImage"
                src="https://d2dfxgvsonxq0d.cloudfront.net/assets/Bloobloom-Collection_page-Women_s_Spectacles-Right.jpg?w=1600"
                alt="Image"
            />
        </div>
    )
}
