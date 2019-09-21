import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DropDownLink.css';

const DropDownLink = (props) => {
    return (
        <NavLink className={classes.DropdownLinks} to={props.link} exact>
            <span>{props.linkText}</span>
        </NavLink>
    );
};

export default DropDownLink;