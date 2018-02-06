import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getSession } from '../actions/authentication.actions';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col
} from 'reactstrap';

class TopMenu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const items = this.props.items.map((item, key) => (
            <NavItem key={key}>
                <NavLink tag={Link} to={item.link}>{item.label}</NavLink>
            </NavItem>
        ));
        return (
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/">SetaIMC</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {items}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
};

export class App extends Component {

    componentDidMount() {
        this.props.getSession();
    }

    render() {
        const menuItems = [
            this.props.isAuthenticated ? { label: 'Logout', link: '/logout' } : { label: 'Login', link: '/login' },
            { label: 'Cliente', link: '/cliente' }
        ];

        return (
            <div className="App">
                <TopMenu items={menuItems} />
                <Container className="mt-3" fluid>
                    <Row>
                        <Col sm={{ size: 8, offset: 2 }}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default connect(
    state => ({ isAuthenticated: state.authentication.isAuthenticated }),
    { getSession }
)(App);
