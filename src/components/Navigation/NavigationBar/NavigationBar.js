import React from 'react';
import classes from './NavigationBar.css';
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "./Backdrop/Backdrop";
import DrawerToggle from "../Toolbar/Toolbar";


const NavigationBar = (props) => {

    // const Backdrop = (props) => (
    //     props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
    //
    // );


    let attachedClasses = [classes.NavigationBar, classes.Close];
    if (props.open) {
        attachedClasses = [classes.NavigationBar, classes.Open];
    }



    return (
       <div>


            <div className={attachedClasses.join(' ')}>

                <Backdrop show={props.open} clicked={props.closed}/>
            </div>

        </div>
    );
};

export default NavigationBar;