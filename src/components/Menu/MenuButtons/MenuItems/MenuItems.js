import React from 'react';
import classes from "./MenuItems.css";
import {NavLink} from "react-router-dom";
import axios from "../../../../axios-orders";

const MenuItems = (props) => {

    const getProds = (category) => {


        axios.get('https://sherepsite-project.firebaseio.com/menu.json/').then(res => {
            let newData = res.category;
            let newNames = [];
            for (let key in newData) {
                newNames.push(newData[key])
            }

        })
    };

    return (
        <div>
            <li className={classes.MenuButtons}>
                <button
                 onClick={getProds('food')}>
                    {props.children}
                </button>
            </li>
        </div>
    );
};

export default MenuItems;