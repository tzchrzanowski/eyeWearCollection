import React, {useContext} from 'react';
import './CategoryButton.css';
import {ButtonClickContext} from "helpers/ButtonClickProvider";

interface Props {
    caption: string;
    hasSubSection?: boolean;
    setSideNavCategoryType?: React.Dispatch<React.SetStateAction<string>>;
    setSideNavCategoryOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    setSideNavOpenAction?: React.Dispatch<React.SetStateAction<boolean>>;
    reversed?: boolean;
    genderType?: string;
}

export function CategoryButton ({caption, hasSubSection, setSideNavCategoryType, setSideNavCategoryOpen, reversed, setSideNavOpenAction, genderType}: Props) {
    const contextValue = useContext(ButtonClickContext);
    const passEyewearTypeContext = () => {
        if (contextValue && genderType) {
            const {setEyewearTypeContext, setGenderTypeSelectedContext} = contextValue;
            setEyewearTypeContext(caption);
            setGenderTypeSelectedContext(genderType);
        }
    }

    const onClickAction = () => {
        /*
         * If button is used for side navigation categories:
         * Opens category sub-section sidebar
         */
        if (hasSubSection && setSideNavCategoryType && setSideNavCategoryOpen) {
            setSideNavCategoryType(()=> {return caption});
            setSideNavCategoryOpen(()=> {return true});
        }
        /*
         * If button is used as sub-category which means it contains the type of eyewear
         * Uses contextApi to save selected choise of gender type of that sub category and eyewear type
         * Context Api values can be read in components that are not direct descendants of this component
         */
        if (!hasSubSection && !reversed && genderType) {
            passEyewearTypeContext();
        }
        /*
         * If button is used to close sub-category
         * Closes sub-category tab
         */
        if (reversed && setSideNavCategoryOpen && setSideNavOpenAction) {
            setSideNavCategoryOpen(()=> {return false});
            setSideNavOpenAction(()=> {return true})
        }
    };

    return (
        <div
            className={"categoryButton"}
            onClick={onClickAction}
        >
            {(reversed) ?
                <>
                    <span className={"categoryButtonCaption"}>{'<'}</span>
                    <span className={"categoryButtonCaption"}>{caption}</span>
                </>
                :
                <>
                    <span className={"categoryButtonCaption"}>{caption}</span>
                    {(hasSubSection) ?
                        <span className={"categoryButtonCaption"}>{'>'}</span> : ''
                    }
                </>
            }
        </div>
    )
}
