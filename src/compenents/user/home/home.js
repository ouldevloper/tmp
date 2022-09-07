
import React from 'react';

import { useState,useEffect } from 'react';
import { Descriptions, PageHeader } from 'antd';
import UserTabbar from './tabs';
import { PlusOutlined, MessageOutlined,ArrowLeftOutlined,CheckOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import Frm from '../newtask/form';
import taskDone from './../donetask/home';
const { Option } = Select;

const UserHome = () => {

  useEffect(() => {
  
    [1, 1, 2].map((i) => {
      debugger
      return taskDone(i) 
    })
  }, []);


  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    console.log("done");
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return <>
    <div className="site-page-header-ghost-wrapper">
      
      <PageHeader
        ghost={false}
        onBack={() => { }}
        title="Your Tasks"
        backIcon={<MessageOutlined />}

        extra={[
          <Button style={{ color: "#1890ff", borderColor: "#1890ff" }} key="1" icon={<PlusOutlined />} onClick={showDrawer}>Create New</Button>,
        ]}
      >

        <UserTabbar />

        <Drawer
          placement="left"
          title="Create a new account"
          width={window.screen.width}
          onClose={onClose}
          open={open}
          icon = {<ArrowLeftOutlined />}
          bodyStyle={{
            paddingBottom: 80,
          }}
        >
         <Frm/>
        </Drawer>
      </PageHeader>
    </div>
    </>
    ;
};

export default UserHome;