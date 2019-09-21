import React from 'react';
import MenuItems from "./MenuItems/MenuItems";
import classes from './MenuButtons.css'

const MenuButtons = (props) => {
    return (
        <div className={classes.MenuButtons}>
            <MenuItems link="/menu/food">food</MenuItems>
            <MenuItems link="/menu/drinks">drinks</MenuItems>
            <MenuItems link="/menu/banquet">banquet</MenuItems>
        </div>
    );
};

export default MenuButtons;