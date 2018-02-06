import { CLIENTE, CLIENTE_SUCCESS, CLIENTE_FAIL, CLIENTE1, CLIENTE1_SUCCESS, CLIENTE1_FAIL } from '../actions/cliente.types'
const initialState = {
    cliente: null,
    clientes: [],
    errorMessage: null,
    loading: true,
    pages: 0
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CLIENTE:
            return { ...state, loading: true, errorMessage: null, cliente: null, clientes: [] };
        case CLIENTE_SUCCESS:
            return { ...state, loading: false, errorMessage: null, cliente: null, clientes: action.result.data.content, pages: action.result.data.totalPages }
        case CLIENTE1:
            return { ...state, loading: true, errorMessage: null, cliente: null, clientes: [] };
        case CLIENTE1_SUCCESS:
            return { ...state, loading: false, errorMessage: null, cliente: action.result.data, clientes: {} }
        default:
            return state;
    }

} 