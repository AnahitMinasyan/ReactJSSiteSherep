import React from 'react';
import classes from "../../../../Menu/MenuNavigation/MenuNavigation.css";
import DropDownLink from "./DropDownLink";
import DropDownLanguage from "../../../../../container/PagesFunctions/DropDownLanguage/DropDownLanguage";
// import MenuItems from "../../../../Menu/MenuNavigation/MenuNavigation";

const DropDownItems = () => {
    return (
        <div>
            <ul className={classes.MenuNavigationItems}>
                {/*<NavigationItem link="/">Home</NavigationItem>*/}
                <DropDownLink link="/en/">English</DropDownLink>
                <DropDownLink link="/hy" >Armenian</DropDownLink>


            </ul>

        </div>
    );
};

export default DropDownItems;