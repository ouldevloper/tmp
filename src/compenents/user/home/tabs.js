import { Tabs } from 'antd';
import React from 'react';
import DataTable from './datatable';

const onChange = (key) => {
  console.log(key);
};

const UserTabbar = (props) => (
  <Tabs defaultActiveKey="1">
  <Tabs.TabPane tab="Active" key="1">
    <DataTable/>
  </Tabs.TabPane>
  <Tabs.TabPane tab="Archieve" key="3">
  <DataTable/>

  </Tabs.TabPane>
</Tabs>
);

export default UserTabbar;