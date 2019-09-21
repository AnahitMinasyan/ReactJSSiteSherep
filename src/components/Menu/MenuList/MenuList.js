import React from 'react';
import classes from './MenuList.css'

const MenuList = () => {
    return (
        <div className={classes.MenuAllList}>
                <div className={classes.MenuList}>
                    <div className={classes.MenuContent}>
                        <h3>Title1</h3>
                        <p>Content1</p>
                    </div>
                    <div className={classes.MenuPrice}>
                        <p>price1</p>
                    </div>
                </div>
                <div className={classes.MenuList}>
                    <div className={classes.MenuContent}>
                        <h3>Title2</h3>
                        <p>Content2</p>
                    </div>
                    <div className={classes.MenuPrice}>
                        <p>price2</p>
                    </div>
                </div><div className={classes.MenuList}>
                <div className={classes.MenuContent}>
                    <h3>Title3</h3>
                    <p>Content3</p>
                </div>
                <div className={classes.MenuPrice}>
                    <p>price3</p>
                </div>
            </div>
            <div className={classes.MenuList}>
                <div className={classes.MenuContent}>
                    <h3>Title4</h3>
                    <p>Content4</p>
                </div>
                <div className={classes.MenuPrice}>
                    <p>price4</p>
                </div>
            </div>
            <div className={classes.MenuList}>
                <div className={classes.MenuContent}>
                    <h3>Title5</h3>
                    <p>Content5</p>
                </div>
                <div className={classes.MenuPrice}>
                    <p>price5</p>
                </div>
            </div> <div className={classes.MenuList}>
            <div className={classes.MenuContent}>
                <h3>Title6</h3>
                <p>Content6</p>
            </div>
            <div className={classes.MenuPrice}>
                <p>price6</p>
            </div>
        </div>
        </div>


    );
};

export default MenuList;