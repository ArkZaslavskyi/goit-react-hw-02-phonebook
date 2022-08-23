import React, { Component } from "react";
import PropTypes from "prop-types";

import { AddContactForm, FormField, FormData, FormBtn } from './Form.styled';

class Form extends Component {
    state = {
        name: '',
        number: '',
    }
    
    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.name, this.state.number);
        this.resetForm();
    };

    resetForm = () => {
        this.setState({
            name: '',
            number: '',
        })
    };

    handleInput = ({ target: { name, value } }) => {
    // console.log(name);
    // console.log(value);
    this.setState({
        [name]: value,
    });
};

    render() {
        return (
            <>
                <AddContactForm onSubmit={this.handleSubmit}>
                    <FormField>
                        Name
                        <FormData
                            type="text"
                            name="name"
                            value={this.state.name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            onChange={this.handleInput}
                        />
                    </FormField>

                    <FormField>
                        Number
                        <FormData
                            type="tel"
                            name="number"
                            value={this.state.number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            onChange={this.handleInput}
                        />
                    </FormField>

                    <FormBtn type="submit">Add contact</FormBtn>
                    
                </AddContactForm>
            </>
        );
    };
};

Form.propTypes = {
    onInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default Form;