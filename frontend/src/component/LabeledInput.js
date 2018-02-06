import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const LabeledInput = (props) => (
    <FormGroup>
        <Label for={props.name}>{props.label}</Label>
        <Input {...props} />
    </FormGroup>
);

export default LabeledInput;