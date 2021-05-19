import React from 'react';
import { Layout } from 'antd';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import './App.less';
import SiderBar from '../../components/SiderBar';
import Header from '../../components/Header';
import EditorPage from './components/Editor';
import HomePage from './components/HomePage';
import Translate from './components/Translate';
import Share from './components/Share';
import Tec from './components/Tec';
import Impression from './components/Impressiom';


function App() {
  return (
    <Layout style={{ height: '100%', minWidth: '1100px' }}>
      <Header></Header>
      <SiderBar></SiderBar>
      <div className={'main-container'}>
        <div className={'main-container-content'}>
          <Switch>
            <Redirect from="/" exact to="/home" />
            <Route path="/home" component={HomePage} />
            <Route path="/translate" component={Translate} />
            <Route path="/share" component={Share} />
            <Route path="/tec" component={Tec} />
            <Route path="/impression" component={Impression} />
            <Route path="/editor" component={EditorPage} />
          </Switch>
        </div>
      </div>
    </Layout>
  );
}

export default App;
