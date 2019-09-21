import React, {Component} from 'react';
import CareerList from "../../../components/Career/CareerList/CareerList";
import AccordionSection from "./AccordionSection/AccordionSection";

class Accordion extends Component {
    static defaultProps = {

    };

    constructor(props) {
        super(props);

        const openSections = {};



        this.state = {
            openSections,
            allowOpen: false,

        };
        this.props.children.map(child => {
            if (child.props.isOpen) {
                openSections[child.props.label] = true;
            }
        });
    }

    onClick = (label) => {
        const { props: { allowOpen },
            state: { openSections } } = this;

        const isOpen = openSections[label];

        if (!allowOpen) {
            this.setState({
                openSections: {
                    [label]: !isOpen
                }
            });
        }
    };

    render() {
        const {
            onClick,
            props: { children },
            state: { openSections },
        } = this;

        return (
            <div >
                {children.map(child => (
                    <AccordionSection
                        isOpen={!!openSections[child.props.label]}
                        label={child.props.label}
                        onClick={onClick}     >
                        {child.props.children}
                    </AccordionSection>
                ))}
            </div>
        );
    }
}

export default Accordion;