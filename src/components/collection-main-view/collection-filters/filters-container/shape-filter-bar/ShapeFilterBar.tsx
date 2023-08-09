import React from "react";
import './ShapeFilterBar.css';

interface ShapeFilterBarProps {
    shapeFilterBarVisible: boolean;
    setShapeStateForParent: React.Dispatch<React.SetStateAction<string[]>>;
}

export function ShapeFilterBar ({shapeFilterBarVisible, setShapeStateForParent}: ShapeFilterBarProps) {
    const shapes = ['square', "rectangle", "round", "cat-eye"];
    const [selectedShapes, setSelectedShapes] = React.useState<string[]>([]);

    const handleSelectedShape = (caption: string) => {
        if (selectedShapes.includes(caption)) {
            const newList = selectedShapes.filter(item=> item !== caption);
            setSelectedShapes(newList);
            setShapeStateForParent(() => {
                return newList;
            });
        } else {
            const newList = [...selectedShapes, caption];
            setSelectedShapes(newList);
            setShapeStateForParent(() => {
                return newList;
            });
        }
    }

    return (
        <div className={(shapeFilterBarVisible ? "shapeFilterBarHeight ": "") + "shapeFilterBarWrapper"}>
            <div className={"shapeFilterCaption"}>
                {"Shapes"}
            </div>
            <div className={"colourSelectionContainer"}>
                <div className={"colourGrid"}>
                    {shapes.map((shape, index) => (
                        <div className={"shapeBox"} onClick={()=>handleSelectedShape(shape)} key={index}>
                            <span className={(selectedShapes.includes(shape) ? "selected " : "")+ ""}>
                                <span>{shape}</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
