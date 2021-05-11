import React, { useState}  from 'react';
import { Layout, Card } from 'antd';

import './index.less';


const ContentContainter = function() {
  const list = new Array(12).fill(1);
  return (
    <div className={'card-container'}>
     { list.map(() => {
        return <Card
        className={'card-item'}
        title="Default size card"
        extra={<a href="#">详情</a>}
        size={'small'}
        >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      })}
    </div>
  );
}

export default ContentContainter;