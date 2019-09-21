import React, {Component} from 'react';
import homePage from '../../assets/images/sherep-2.png';

import classes from './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className={classes.HomePage}>
                <img src={homePage} alt=""/>

                <div className={classes.HomePageText}>
                    <p>
                        the taste & smell
                    </p>
                    <p>
                        of Armenia
                    </p>
                </div>
            </div>
        );
    }
}

export default HomePage;