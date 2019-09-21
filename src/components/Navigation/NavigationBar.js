import React from 'react';
import classes from './NavigationBar.css';
import Logo from '../Logo/Logo';
import NavigationItems from "./NavigationItems/NavigationItems";

const NavigationBar = (props) => {
    return (
        <header className={classes.NavigationBar}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav >
                <NavigationItems />
            </nav>
        </header>
    );
};

export default NavigationBar;