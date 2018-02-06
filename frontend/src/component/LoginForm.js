import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

import LabeledInput from './LabeledInput';

const ErrorPanel = ({ message }) => (
    <Alert color="danger">{message}</Alert>
);

class LoginForm extends Component {

    state = {
        username: '',
        password: ''
    }
    handleInputChange = (e) => {
        let value = e.target.value;
        let inputName = e.target.name;
        this.setState({ [inputName]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        const { login } = this.props;
        login(username, password);
    };

    render() {
        const { errorMessage } = this.props;
        const errorPanel = errorMessage ? <ErrorPanel message={errorMessage} /> : null;
        return (
            <div>
                {errorPanel}

                <Form onSubmit={this.handleSubmit}>
                    <LabeledInput onChange={this.handleInputChange} label="Login" name="username" />
                    <LabeledInput onChange={this.handleInputChange} label="Password" name="password" type="password" />
                    <Button>Login</Button>
                </Form>
            </div>
        );
    }
}

export default LoginForm;