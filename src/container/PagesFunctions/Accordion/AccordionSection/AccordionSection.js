import React, {Component} from 'react';
import classes from './AccordionSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";
import axios from "../../../../axios-orders";


class AccordionSection extends Component {

    state = {
        data: null
    }




    componentDidMount (id) {
        axios.get( 'https://sherepsite-project.firebaseio.com/career/' + id + '.json/')
            .then( response => {
                this.setState( { loadedPost: response.data } );
            });
    }


    onClick = () => {
        this.props.onClick(this.state.loadedPost.label);
    };

    render() {
        const { onClick, props: { isOpen, label } } = this;

        return (
            <div className={classes.AccordionSection}  >
                <div onClick={onClick} className={classes.AccordionSectionClose}>
                    {label}
                    <div className={classes.AccordionSectionFontIcon}>
                        {!isOpen &&
                            <FontAwesomeIcon icon={faAngleDown}/>

                        }
                        {isOpen &&  <FontAwesomeIcon icon={faAngleUp}/>}
                    </div>
                </div>
                {isOpen && (
                    <div className={classes.AccordionSectionOpen}  >
                        {this.props.children}
                    </div>
                )}
            </div>
        );
    }
}

export default AccordionSection;