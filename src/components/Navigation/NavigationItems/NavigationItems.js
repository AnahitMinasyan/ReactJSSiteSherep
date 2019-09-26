import React from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './NavigationItems.css';



import SearchLanguage from "./SearchLanguage/SearchLanguage";



const NavigationItems = () => {
    return (
        <div className={classes.NavigationAllItems}>

            {/*<div>*/}
            {/*    <SearchLanguage/>*/}
            {/*</div>*/}
            <ul className={classes.NavigationItems}>
                {/*<NavigationItem link="/">Home</NavigationItem>*/}
                <NavigationItem link="/about">About</NavigationItem>
                <NavigationItem link="/menu" >Menu</NavigationItem>
                <NavigationItem link="/gallery" >Gallery</NavigationItem>
                <NavigationItem link="/media" >Media</NavigationItem>
                <NavigationItem link="/news" >Events</NavigationItem>
                <NavigationItem link="/career" >Career</NavigationItem>
                <NavigationItem link="/contact" >Contact</NavigationItem>

            </ul>
        </div>

    );
};

export default NavigationItems;