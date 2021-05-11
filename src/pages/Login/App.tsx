import React from 'react';
import { Layout } from 'antd';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import './App.less';
import SignComponent from './components/Sign';


function App() {
  return (
    <Layout style={{ height: '100%', minWidth: '1100px' }}>
      <Switch>
        <Redirect from="/" exact to="/sign" />
        <Route path="/sign" component={SignComponent} />
      </Switch>
    </Layout>
  );
}

export default App;
