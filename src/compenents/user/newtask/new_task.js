import { Button, Drawer, Radio, Space } from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import React, { useState } from 'react';
import Btn from '../home/button';
import ApplyForm from './applyform';

const NewTask = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');

  const showDrawer = () => {
    setOpen(true);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>

        <Button type="primary" onClick={showDrawer} >
          Open
        </Button>

      <Drawer
        size='large'
        placement="left"
        title="New Task"
        width={720}

        onClose={onClose}
        
        open={open}

      >
        <ApplyForm/>
      </Drawer>
    </>
  );
};


export default NewTask;