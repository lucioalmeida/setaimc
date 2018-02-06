import React, { Component } from 'react';
import { connect } from 'react-redux';
import { salvar, encontrar } from '../actions/cliente.actions';
import { Button } from 'reactstrap';
import Cliente from '../component/ClienteForm';

export default connect(
    state => ({ errorMessage: state.cliente.errorMessage, cliente: state.cliente.cliente, loading: state.cliente.loading }),
    { salvar, encontrar }
)(Cliente);