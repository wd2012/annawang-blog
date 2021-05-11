import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import { Provider } from 'redux-zero/react';
import 'antd/dist/antd.less';

import './index.less';
import App from './App';
import reportWebVitals from '../../reportWebVitals';
import { state } from './store';



ReactDOM.render(
  <React.Fragment>
    <Provider store={state}>
        <HashRouter>
          <Route path="/" component={App} />
        </HashRouter>
      </Provider>,
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
