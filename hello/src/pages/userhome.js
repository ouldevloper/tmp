
import React from 'react';

import { useState, useEffect } from 'react';
import { Descriptions, PageHeader, Rate } from 'antd';
import UserTabbar from '../compenents/user/home/tabs';
import { PlusOutlined, MessageOutlined, ArrowLeftOutlined, CheckOutlined, DownCircleOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, Modal } from 'antd';
import Frm from '../compenents/user/newtask/form';
import taskDone from '../compenents/user/donetask/home';
import axios from 'axios';
import { responsiveArray } from 'antd/lib/_util/responsiveObserve';
const { Option } = Select;

const UserHome = () => {

  useEffect(() => {
    const data = new FormData();
    data.append("user_id", 0);
    axios.post("http://127.0.0.1/api/feedback/get", data).then((response) => {
      [1,2,3].map((item) => {
        const title = "Task " + item+ " Done!";
        console.log(title);
        return
        Modal({
          destroyOnClose: true,
          title: title,
          icon: <DownCircleOutlined />,
          onOk() {
            //Modal.destroyAll();
          },

          onCancel() {
            //Modal.destroyAll();
          },


          content: (
            <div>
              <p>
                Plaise Give us ur Feedback and rating our Service
              </p>
              <Rate defaultValue={0} ></Rate>
              <br />
            </div>
          ),

        });
      });
      //for (const item in response.data) {
      //  const title = "Task " + response.data[item]['id'] + " Done!";
      //  console.log(response.data[item]);
      //  
      //}
    });
  });







  const [open, setOpen] = useState(false);
  const showDrawer = () => {
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
          title="Create new Task"
          width={window.screen.width}
          onClose={onClose}
          open={open}
          icon={<ArrowLeftOutlined />}
          bodyStyle={{
            paddingBottom: 80,
          }}
        >
          <Frm />
        </Drawer>
      </PageHeader>
    </div>
  </>
    ;
};

export default UserHome;