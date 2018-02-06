import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buscar } from '../actions/cliente.actions';
import { Table, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

class Cliente extends Component {
    state = {
        page: 0
    }
    componentDidMount() {
        this.props.buscar(this.state.page);
    }

    handleEditar = (id) => {
        browserHistory.push(`/cliente/${id}`);
    }
    handleNext() {
        let page = this.state.page;
        this.setState({ page: page + 1 });
        this.props.buscar(this.state.page);
    }
    handlePrev() {
        let page = this.state.page;
        this.setState({ page: page - 1 });
        this.props.buscar(this.state.page);
    }
    handlePage(page) {
        this.setState({ page: page - 1 });
        this.props.buscar(this.state.page);
    }
    renderPagination() {
        let de = 1;
        let ate = this.props.pages;
        if (this.state.page > 3) {
            de = this.state.page - 2;
        }
        if (de + 6 < ate) {
            ate = de + 6;
        }
        let qtd = ate - de;
        if (qtd < this.props.pages) {
            de = ate - (this.props.pages > 7 ? 6 : this.props.pages - 1);
        }
        let RANGE = (start, end) => Array.from(Array(end + 1).keys()).slice(start);
        const pages = RANGE(de, ate);
        return <Pagination>
            <PaginationItem disabled={this.state.page == 0}>
                <PaginationLink previous onClick={this.handlePrev.bind(this)} />
            </PaginationItem>
            {pages.map((item, index) =>
                <PaginationItem key={index} active={item - 1 == this.state.page}>
                    <PaginationLink onClick={this.handlePage.bind(this, item)} >{item}</PaginationLink>
                </PaginationItem >
            )}
            <PaginationItem disabled={this.state.page + 1 == this.props.pages}>
                <PaginationLink next onClick={this.handleNext.bind(this)} />
            </PaginationItem>
        </Pagination>;
    }

    render() {
        const { loading, clientes, pages } = this.props;
        return (
            <div>
                <Button color="primary" tag={Link} to="/cliente/new">Novo</Button>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading &&
                            <tr>
                                <td colSpan={3}>Carregando</td>
                            </tr>
                        }
                        {!loading && clientes && clientes.map((item, index) =>
                            <tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.nome}</td>
                                <td><Button onClick={this.handleEditar.bind(this, item.id)} color="link">Editar</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                {pages > 1 &&
                    this.renderPagination()
                }
            </div>);
    }
}
export default connect(
    state => ({ errorMessage: state.cliente.errorMessage, clientes: state.cliente.clientes, loading: state.cliente.loading, pages: state.cliente.pages }),
    { buscar }
)(Cliente);