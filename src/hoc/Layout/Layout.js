import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import NavigationBar from '../../components/Navigation/NavigationBar';

import Footer from '../../components/footer/Footer';
import classesContact from '../../container/ContactPage/ContactPage.css';



class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Auxiliary>
                <NavigationBar drawerToggleClicked={this.sideDrawerToggleHandler} />

                <main className={classes.Content}>
                    {this.props.children}
                </main>

                <Footer className={classesContact.ContactPage}/>
            </Auxiliary>
        )
    }
}

export default Layout;