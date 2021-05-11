import createStore from 'redux-zero';
import { applyMiddleware } from 'redux-zero/middleware';
import { connect } from 'redux-zero/devtools';

import cookie from 'js-cookie';


import { UserInfo } from '../../../types';

class IndexState {
  constructor(initValues?: Partial<IndexState>) {
    if (initValues) {
      Object.assign(this, initValues);
    }
  }

  userInfo: UserInfo = {
    u_id: '',
    u_name: '',
  }

}

const initialState = new IndexState({});

const middlewares = connect ? applyMiddleware(connect(initialState)) : [];
const state = createStore(initialState, middlewares);

Object.defineProperty(window, '__indexState', { get: state.getState });

export { state, IndexState };