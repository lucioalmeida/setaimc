import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import initStore from './config/store';
import { setupAxiosInterceptors } from 'rest/axios';
import { redirectToLoginWithMessage, logout } from './actions/authentication.actions';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { Router } from 'react-router';
import getRoutes from './router/router';

import 'bootstrap/dist/css/bootstrap.css';

const store = initStore();
const history = syncHistoryWithStore(browserHistory, store);

const actions = bindActionCreators({redirectToLoginWithMessage, logout}, store.dispatch);
setupAxiosInterceptors(() => actions.redirectToLoginWithMessage(''));

ReactDOM.render(
    <Provider store={store}>
      <div>
        <Router history={history} routes={getRoutes(actions.logout)}/>
      </div>
    </Provider>,
    document.getElementById('root')
);