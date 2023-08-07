import React from "react";
import "./CollectionList.css";
import {GlassesInterface} from "data/CustomTypes";

interface CollectionListProps {
    collection: GlassesInterface[];
}

export function CollectionList ({collection}: CollectionListProps) {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(()=> {
        if (collection.length > 0) {
            setLoading(false);
        }
    }, [collection]);

    return (
        <>
            {(loading == true) ?
                <div>Loading...</div>
                :
                <div className={"collectionListWrapper"}>
                    {collection.map((item, index) => (
                        <div className={"collectionItemWrapper"} key={index}>
                            <div className={"collectionItemCaption"}>
                                <span className={"collectionItemCaptionName"}>{item.name}</span>
                            </div>
                            <img className={"collectionItemImage"} src={item.glass_variants[0].media[0].url} alt={"image"} />
                        </div>
                    ))}
                </div>
            }
        </>
    )
}
