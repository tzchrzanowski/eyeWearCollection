import React, { useState, ChangeEvent } from 'react';
import './Home.css';
import {TopNavigation} from 'components/top-navigation/TopNavigation';

export function Home () {

    return (
        <div className={"Home"}>
            <TopNavigation />
        </div>
    )
}
