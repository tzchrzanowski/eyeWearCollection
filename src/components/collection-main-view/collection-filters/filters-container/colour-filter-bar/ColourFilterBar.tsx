import React, {useContext} from "react";
import "./ColourFilterBar.css"

interface ColourFilterBarProps {
    colourFilterBarVisible: boolean;
    setColourStateForParent: React.Dispatch<React.SetStateAction<string[]>>;
}
export function ColourFilterBar ({colourFilterBarVisible, setColourStateForParent}: ColourFilterBarProps) {
    const colours = ["Black", "Tortoise", "Coloured", "Crystal", "Dark", "Bright"];
    const [selectedColour, setSelectedColour] = React.useState<string[]>([]);

    const handleSelectedColour = (caption: string) => {
        if (selectedColour.includes(caption)) {
            const newList = selectedColour.filter(item=> item !== caption);
            setSelectedColour(newList);
            setColourStateForParent(() => {
                return newList;
            });
        } else {
            const newList = [...selectedColour, caption];
            setSelectedColour(newList);
            setColourStateForParent(() => {
                return newList;
            });
        }
    }

    return (
        <div className={(colourFilterBarVisible ? "colourFilterBarHeight ": "") + "colourFilterBarWrapper"}>
            <div className={"colourFilterCaption"}>
                {"Colours"}
            </div>
            <div className={"colourSelectionContainer"}>
                <div className={"colourGrid"}>
                    {colours.map((color, index) => (
                        <div className={"colourBox"} onClick={()=>handleSelectedColour(color)} key={index}>
                            <span className={(selectedColour.includes(color) ? "selected " : "")+ "circleShapeWrapper"}>
                                <span className={`circleShape colour${color}`}></span>
                            </span>
                            <span>{color}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

