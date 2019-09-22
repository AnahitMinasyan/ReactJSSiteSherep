import React, {Component} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import classes from './Accordion.css';
import CareerList from "../../../components/Career/CareerList/CareerList";


class Accordion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleClick() {
        if (this.state.open) {
            this.setState({
                open: false,
            });

        } else {
            this.setState({
                open : true,
            });
        }
    }

    render() {
        return (
            <div className={classes.AccordionSection}>

                {
                    this.state.open &&
                        <div>

                            <div className={classes.AccordionLabel}  onClick={this.handleClick.bind(this)}>
                                { this.props.post.label}

                                <FontAwesomeIcon icon={faAngleDown}/>


                            </div>

                            < div className={[classes.AccordionContent, classes.AccordionSectionOpen].join(' ')}>
                                <div className={classes.CareerList}>

                                    <div>
                                        <h3>{this.props.post.title}</h3>
                                        <p>
                                            {this.props.post.content}
                                        </p>

                                    </div>


                                </div>
                            </div>
                        </div>

                }


                {
                    !this.state.open &&
                        <div>
                            <div className={classes.AccordionLabel} onClick={this.handleClick.bind(this)}>

                                { this.props.post.label}

                                <FontAwesomeIcon icon={faAngleUp}/>
                            </div>
                            <div className={[classes.AccordionContent, classes.AccordionSectionClose].join(' ')}>
                                <div className={classes.CareerList}>

                                </div>
                            </div>
                        </div>
                }

            </div>
        );
    }
}

export default Accordion;