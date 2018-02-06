import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { browserHistory } from 'react-router';

import LabeledInput from './LabeledInput';

class Cliente extends Component {

    constructor(props) {
        super(props);
        if (props.cliente) {
            this.state = { nome: props.cliente.nome || '' };
        }
    };
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.cliente) {
            this.setState({ nome: nextProps.cliente.nome || '' });
        }
    };
    handleInputChange = (e) => {
        let value = e.target.value;
        let inputName = e.target.name;
        this.setState({ [inputName]: value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const { nome } = this.state;
        const { cliente = {} } = this.props;
        this.props.salvar({ ...cliente, nome });
    };
    componentDidMount() {
        if (this.props.params.id && this.props.params.id !== 'new') {
            this.props.encontrar(this.props.params.id);
        }
    }

    render() {
        const { loading, cliente } = this.props;
        const { nome = '' } = this.state || {};
        return <Form onSubmit={this.handleSubmit}>
            <LabeledInput label="nome" name="nome" onChange={this.handleInputChange} value={nome} />
            <Button color="primary" onClick={() => browserHistory.push('/cliente')}>Voltar</Button>{' '}
            <Button color="success" type="submit">Salvar</Button>
        </Form>;
    }
}

export default Cliente;