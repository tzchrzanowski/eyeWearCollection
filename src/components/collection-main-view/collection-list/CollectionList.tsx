import React from "react";
import "./CollectionList.css";
import {GlassesInterface} from "data/CustomTypes";

type NestedGlassInterface = GlassesInterface[][];

interface CollectionListProps {
    collection: NestedGlassInterface;
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
                <div>
                    {collection.map((innerArray:GlassesInterface[], outerIndex: number) => (
                        <div className={"collectionListWrapper"} key={outerIndex}>
                            {innerArray.map((item: GlassesInterface, index: number) => (
                                <div className={"collectionItemWrapper"} key={index}>
                                    <div className={"collectionItemCaption"}>
                                        <span className={"collectionItemCaptionName"}>{item.name}</span>
                                    </div>
                                    <img className={"collectionItemImage"} src={item.glass_variants[0].media[0].url} alt={"image"} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            }
        </>
    )
}
