import React from "react";
import "./CollectionFilters.css"
import {FiltersContainer} from "./filters-container/FiltersContainer";

interface CollectionFiltersProps {
    gender: string;
    eyewearType: string;
}

export function CollectionFileters({gender, eyewearType}: CollectionFiltersProps) {
    const genderUpperCase = gender.toUpperCase();
    const eyewearTypeUpperCase = eyewearType.toUpperCase();

    return (
      <div className={"collectionFiltersWrapper"}>
          <div></div>
          <div className={"headerCaption"}>
              <span>{eyewearTypeUpperCase} {genderUpperCase}</span>
          </div>
          <FiltersContainer />
      </div>
    );
}
