import { Button, Descriptions, PageHeader } from 'antd';
import React from 'react';
import {CheckOutlined}  from '@ant-design/icons';
;

const AdminHome = () => (
  <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle"
      extra={[
        <Button icon={<CheckOutlined />} key="1">Operation</Button>,
        <Button icon={<CheckOutlined />} key="2">Operation</Button>,
      ]}
    >
      <Descriptions size="small" column={3}>
        
      </Descriptions>
    </PageHeader>
  </div>
);

export default AdminHome;