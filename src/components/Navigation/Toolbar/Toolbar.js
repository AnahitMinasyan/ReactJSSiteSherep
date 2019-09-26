import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../NavigationBar/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>

            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
            <DrawerToggle  clicked={props.drawerToggleClicked} />
        </header>
    );
};

export default Toolbar;