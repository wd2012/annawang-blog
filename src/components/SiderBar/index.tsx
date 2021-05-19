import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.less';

import './index.less';

const { SubMenu } = Menu;

export enum PathMap {
  home = '/home',
  translate = '/translate',
  share = '/share',
  tec = '/tec',
  impression = '/impression',
};

const HOME_MENU = '首页';
const TRANSLATE = '翻译';
const TEC = '技术';
const SHARE = '分享';
const IPPRESSION = '随感';
const MenuArr = [
  {
    name: HOME_MENU,
    key: 'home',
    icon: HOME_MENU,
  },
  {
    name: TRANSLATE,
    key: 'translate',
    icon: TRANSLATE,
  },
  {
    name: TEC,
    key: 'tec',
    icon: TEC,
  },
  {
    name: SHARE,
    key: 'share',
    icon: SHARE,
  },
  {
    name: IPPRESSION,
    key: 'impression',
    icon: IPPRESSION,
  }
];

const Siderbar = function() {
  const [ collapsed, setcCollapsed ] = useState(false);
  return (
    <div className={'sider-menu'}>
        <Menu
          mode="horizontal"
          theme="light"
        >
          <Menu.Item key={HOME_MENU} icon={<PieChartOutlined />}>
            <Link to={PathMap.home} className="nav-link">
              {HOME_MENU}
            </Link>
          </Menu.Item>
          <Menu.Item key={TEC} icon={<PieChartOutlined />}>
            <Link to={PathMap.tec} className="nav-link">
              {TEC}
            </Link>
          </Menu.Item>
          <Menu.Item key={TRANSLATE} icon={<PieChartOutlined />}>
            <Link to={PathMap.translate} className="nav-link">
              {TRANSLATE}
            </Link>
          </Menu.Item>
          <Menu.Item key={SHARE} icon={<PieChartOutlined />}>
            <Link to={PathMap.share} className="nav-link">
              {SHARE}
            </Link>
          </Menu.Item>
          <Menu.Item key={IPPRESSION} icon={<PieChartOutlined />}>
            <Link to={PathMap.impression} className="nav-link">
              {IPPRESSION}
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
}


export default Siderbar;

