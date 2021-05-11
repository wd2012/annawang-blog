import React, { useState, useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'redux-zero/react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  Button,
  Input,
  Tabs,
  Form,
  Checkbox,
  message
} from 'antd';

import {
  actions,
  LoginState,
  ConnectProps
} from '../../store';
import { Login } from '../../../../api';

import './index.less';
import { UserCount } from '../../../../types';

export const mapToProps = ({ }: LoginState) => ({

});

type Props = ConnectProps<typeof mapToProps>;

const { TabPane } = Tabs;

const LOGON = '登录';
const SIGN_IN = '注册';
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};
const tailOptLayout = {
  wrapperCol: { offset: 0, span: 24 },
};


function Sign(props: RouteComponentProps&Props&{
  login: (params: UserCount) => void;
}) {
  const [userName, setUserName] = useState('');
  const [userPassword, setPassword] = useState('');
  // const { login } = props;
  
  const loginBlog = async (value: any) => {
    try {
      const { userName, userPassword } = value;
      const url = await Login({
        userName,
        userPassword
      });
      const origin = window.location.origin;
      window.location.replace(`${origin}/home.html`);
    } catch(e) {
      console.log('e==', e);
      // message.error(e);
    }
  }
  return (
    <div className={'sign-container'}>
      <div className={'sign-container-card'}>
      <Tabs defaultActiveKey="1"
        tabBarStyle={{
          border: 0
        }}
      >
        <TabPane tab={LOGON} key="1">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={loginBlog}
          // onFinishFailed={onFinishFailed}
          >
          <Form.Item
            label="用户名"
            name="userName"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="userPassword"
  
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item {...tailOptLayout}>
            <Button className={'sign-submit-opt'} type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
        </TabPane>
        <TabPane tab={SIGN_IN} key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
      </div>
    </div>
  );
}

const SignComponent = connect(mapToProps, actions)(Sign);
export default withRouter(SignComponent);

