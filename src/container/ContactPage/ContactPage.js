import React, {Component} from 'react';


import classes from './ContactPage.css';
import classesFooter from '../../components/footer/footer.css';
import MapContainer from "../PagesFunctions/MapCreator/MapContainer";
import Input from "../../components/Contact/input";
import axios from "../../axios-orders";



class ContactPage extends Component {

    state = {
        contactForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false

            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false

            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Message'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false,
        loading: false
    };

    contactHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for(let formElementIdentifier in this.state.contactForm) {
            formData[formElementIdentifier] =  this.state.contactForm[formElementIdentifier].value;
        }
        const contact = {
            contactData: formData
        };

        axios.post('https://sherepsite-project.firebaseio.com/contact.json', contact)
            .then(res => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
    };

    checkValidity(value, rules){
        let isValid = true;
        if(!rules){
            return true;
        }

        if( rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length <= rules.maxLength && isValid;
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        return isValid;
    }


    inputChangedHandler = (event, inputIdentifier) =>  {
        const updateContactForm = {
            ...this.state.contactForm
        };
        const updateFormElement = {
            ...updateContactForm[inputIdentifier]
        };
        updateFormElement.value = event.target.value;
        updateFormElement.valid = this.checkValidity(updateFormElement.value, updateFormElement.validation );
        updateFormElement.touched = true;
        updateContactForm[inputIdentifier] = updateFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updateContactForm) {
            formIsValid = updateContactForm[inputIdentifier].valid && formIsValid;
         }
        this.setState({contactForm: updateContactForm, formIsValid: formIsValid})
    }

    render() {

        const formElementsArray = [];
        for(let key in this.state.contactForm) {
            formElementsArray.push ({
                id: key,
                config: this.state.contactForm[key]
            });
        }


        let form = (
            <form onSubmit={this.contactHandler.bind(this)}>
                {formElementsArray.map( formElement => (
                    <Input
                        key={formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        value = {formElement.config.value}
                        invalid= {!formElement.config.valid}
                        shouldValidate = {formElement.config.validation}
                        touched = {formElement.config.touched}
                        changed = {(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <button onClick={this.contactHandler.bind(this)} className={classes.SendButton}>send</button>
            </form>
        );
        return (
            <div className={classes.ContactPage}>
                <div className={classes.ContactMap}>
                    <MapContainer/>
                </div>
                <div className={classes.ContactPageContent}>
                    <h1>Contact</h1>
                    {form}


                    {/*<form  className={classes.ContactPageForm}>*/}
                        {/*<div className={classes.ContactInputField}>*/}
                            {/*/!*<label htmlFor="name">name</label>*!/*/}
                            {/*<input type="text" id='name' placeholder='name'/>*/}
                        {/*</div>*/}
                        {/*<div className={classes.ContactInputField}>*/}
                            {/*/!*<label htmlFor="email">email</label>*!/*/}
                            {/*<input type="email" id='email' placeholder='email'/>*/}
                        {/*</div>*/}
                        {/*<div className={classes.ContactInputField}>*/}
                            {/*/!*<label htmlFor="message">message</label>*!/*/}
                            {/*<textarea id="message" placeholder='message' ></textarea>*/}
                        {/*</div>*/}
                        {/*<button className={classes.SendButton}>send</button>*/}
                    {/*</form>*/}
                </div>


            </div>
        );
    }
}

export default ContactPage;