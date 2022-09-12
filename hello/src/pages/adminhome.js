import { Button, Descriptions, PageHeader } from 'antd';
import React from 'react';


import {CheckOutlined,ArrowRightOutlined,MenuUnfoldOutlined} from  "@ant-design/icons";
import UserTabbar from '../compenents/user/home/tabs';

const AdminHome = () => (
  <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      onBack={() => null}
      title="Tasks"
      backIcon={<MenuUnfoldOutlined />}
      extra={[
        <Button style={{color:"#2897f4",borderColor:"#2897f4"}} onClick={null} value="" key={1} icon={<CheckOutlined />}>Accept</Button> ,
        <Button  onClick={null} value="" key={1} icon={<ArrowRightOutlined />}>Redirect</Button> ,
      ]}
    >
      <UserTabbar/>
        
    </PageHeader>
  </div>
);
export default AdminHome;