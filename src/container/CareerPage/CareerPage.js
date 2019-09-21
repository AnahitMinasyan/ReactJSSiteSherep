import React, {Component} from 'react';
import classes from './CareerPage.css';
import careerImg  from '../../assets/images/sherep-10.png';
// import MediaList from "../../components/Media/MediaList/MediaList";
import CareerList from "../../components/Career/CareerList/CareerList";
import Accordion from "../PagesFunctions/Accordion/Accordion";

class CareerPage extends Component {
    render() {
        return (
            <div className={classes.CareerPage}>
                <div className={classes.CareerPageImg}>
                    <img src={careerImg} alt=""/>
                </div>
                <div className={classes.CareerPageContent}>
                    <h1>Career</h1>
                    <div className={classes.CareerAllContent}>
                        <Accordion>
                            <div label="Career1" >
                                <CareerList />
                            </div>

                            <div label="Career2" >
                                <CareerList />
                            </div>
                        </Accordion>
                    </div>
                </div>
            </div>
        );
    }
}

export default CareerPage;