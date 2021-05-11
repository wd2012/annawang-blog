import createStore from 'redux-zero';
import { applyMiddleware } from 'redux-zero/middleware';
import { connect } from 'redux-zero/devtools';

import cookie from 'js-cookie';


import { UserCount } from '../../../types';


class LoginState {
  constructor(initValues?: Partial<LoginState>) {
    if (initValues) {
      Object.assign(this, initValues);
    }
  }

  userInfo: UserCount = {
    userName: '',
    userPassword: '',
  }

}

const initialState = new LoginState({});

const middlewares = connect ? applyMiddleware(connect(initialState)) : [];
const state = createStore(initialState, middlewares);

Object.defineProperty(window, '__loginState', { get: state.getState });

export { state, LoginState };
