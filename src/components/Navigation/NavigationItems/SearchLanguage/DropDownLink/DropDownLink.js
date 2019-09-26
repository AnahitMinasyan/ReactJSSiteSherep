import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DropDownLink.css';

const DropDownLink = (props) => {
    return (


            <div>
                <li className={classes.MenuItem } >
                    <NavLink className={classes.DropdownLinks} to={props.link} exact={props.exact}  activeClassName={classes.active}>
                        <span>{props.linkText}</span>
                    </NavLink>
                </li>
            </div>

    );
};

export default DropDownLink;