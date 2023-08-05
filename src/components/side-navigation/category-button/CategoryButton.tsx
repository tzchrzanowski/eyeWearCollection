import React, { useState, ChangeEvent } from 'react';
import './CategoryButton.css';

interface Props {
    caption: string;
    hasSubSection?: boolean;
    setSideNavCategoryType?: React.Dispatch<React.SetStateAction<string>>;
    setSideNavCategoryOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    setSideNavOpenAction?: React.Dispatch<React.SetStateAction<boolean>>;
    reversed?: boolean;
}

export function CategoryButton ({caption, hasSubSection, setSideNavCategoryType, setSideNavCategoryOpen, reversed, setSideNavOpenAction}: Props) {

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
         * If button is used as sub-category
         * Opens sub-category with selected glasses types
         */

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
