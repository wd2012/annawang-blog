import React, { useState, useEffect } from 'react';
import {
  Button,
  Badge
} from 'antd';
import { withRouter } from 'react-router-dom';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  UserOutlined,
  MessageOutlined,
  NotificationOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.less';

import './index.less';

const Header = function(props: any) {
  const gotoEditorPage = () => {
    console.log(' props.history==',  props.history);
    props.history.push({
      pathname: "/editor",
    });
  };
  return(
    <div className={'header-container'}>
      <div className={'header-left'}>

      </div>
      <div className={'header-middle'}>

      </div>
      <div className={'header-right'}>
        <Button size="small" onClick={gotoEditorPage} type="primary" className={'right-item'}>写文章</Button>
        <Badge className={'right-item header-icon'} count={5}>
          <NotificationOutlined />
        </Badge>
        <UserOutlined className={'header-icon'} />
      </div>
    </div>
  );
}


export default withRouter(Header);