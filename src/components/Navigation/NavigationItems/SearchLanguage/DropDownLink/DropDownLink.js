import React, {Component} from 'react';
import classes from './DropDownLink.css';
import Input from "../../../../Contact/input";

class DropDownLink extends Component {
    state = {
        selectForm: {
            selectLanguage: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'english', displayValue: 'english'},
                        {value: 'armenian', displayValue: 'հայերեն'}
                    ]
                },
                value: '',
                validation: {},
                valid: true
            }
        },
        formIsValid: false,
        loading: false
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {

        const updatedSelectForm = {
            ...this.state.selectForm
        };
        const updatedFormElement = {
            ...updatedSelectForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedSelectForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedSelectForm) {
            formIsValid = updatedSelectForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({selectForm: updatedSelectForm, formIsValid: formIsValid});
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.selectForm) {
            formElementsArray.push({
                id: key,
                config: this.state.selectForm[key]
            });
        }
        console.log(formElementsArray);

        let form = (
            <form className={classes.dropdownForm}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}

            </form>
        );


        return (
            <div style={{'text-align': 'end'}}>
                <li className={classes.MenuItem}>
                    {form}
                </li>
            </div>

        );
    }
};

export default DropDownLink;