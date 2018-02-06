import { browserHistory } from 'react-router';
import { CLIENTE, CLIENTE_SUCCESS, CLIENTE_FAIL, CLIENTE1, CLIENTE1_SUCCESS, CLIENTE1_FAIL } from './cliente.types'

export function buscar(page) {
    return {
        types: [CLIENTE, CLIENTE_SUCCESS, CLIENTE_FAIL],
        promise: (client) => client.get(`/api/cliente?page=${page}&size=5`)
      };
}

export function encontrar(id) {
    return {
        types: [CLIENTE1, CLIENTE1_SUCCESS, CLIENTE1_FAIL],
        promise: (client) => client.get(`/api/cliente/${id}`)
      };
}

export function salvar(cliente) {
    return {
        types: [CLIENTE1, CLIENTE1_SUCCESS, CLIENTE1_FAIL],
        promise: (client) => client.post(`/api/cliente`, cliente),
        afterSuccess: (dispatch, getState, response) => {
            browserHistory.push('/cliente');
        }
      };
}