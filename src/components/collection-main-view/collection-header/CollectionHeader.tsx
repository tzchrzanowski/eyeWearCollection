import React from "react";
import "./CollectionHeader.css"

interface CollectionMainViewProps {
    gender: string;
    type: string;
}

export function CollectionHeader ({gender, type}: CollectionMainViewProps) {
    const genderCapital = capitalizeFirstLetter(gender);
    const typeCapital = capitalizeFirstLetter(type);

    function capitalizeFirstLetter(inputString: string) {
        return inputString.charAt(0).toUpperCase() + inputString.slice(1);
    }

    const leftImageUrl = `https://d2dfxgvsonxq0d.cloudfront.net/assets/Bloobloom-Collection_page-${genderCapital}_s_${typeCapital}-Left.jpg?w=1600`
    const rightImageUrl = `https://d2dfxgvsonxq0d.cloudfront.net/assets/Bloobloom-Collection_page-${genderCapital}_s_${typeCapital}-Right.jpg?w=1600`

    return (
        <div className={"collectionHeader"}>
            <img
                className="collectionImage"
                src={leftImageUrl}

                alt="Image"
            />
            <img
                className="collectionImage"
                src={rightImageUrl}
                alt="Image"
            />
        </div>
    )
}
